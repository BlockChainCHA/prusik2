// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Tienda {
    struct Product {
        uint256 id;
        string name;
        string description;
        uint256 stock;
        bool available;
    }

    Product[3] public products;
    address public owner;
    IERC20 public token; // El contrato del token ERC20

    event ProductPurchased(uint256 productId, uint256 quantity);

    constructor(address _tokenAddress) {
        owner = msg.sender;
        token = IERC20(_tokenAddress);

        // Configura tres productos iniciales en la tienda
        products[0] = Product(1, "Producto A1", "Alimento para gato A1", 100, true);
        products[1] = Product(2, "Producto B2", "Alimento para gato B2", 50, true);
        products[2] = Product(3, "Producto C3", "Alimento para perro C3", 300, true);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Solo el propietario puede realizar esta accion");
        _;
    }

    function purchaseProduct(uint256 productId, uint256 quantity) external {
        Product storage product = products[productId];
        require(product.available, "Producto no disponible");
        require(product.stock >= quantity, "Cantidad insuficiente en stock");

        uint256 totalPrice = quantity; // Suponiendo que 1 token equivale a 1 unidad de precio
        require(token.transferFrom(msg.sender, address(this), totalPrice), "Fallo al transferir tokens");

        product.stock -= quantity;

        emit ProductPurchased(productId, quantity);
    }

    function setProductAvailability(uint256 productId, bool available) external onlyOwner {
        products[productId].available = available;
    }

    function getProducts() external view returns (Product[] memory) {
        Product[] memory result = new Product[](3);
        
        for (uint256 i = 0; i < 3; i++) {
            result[i] = products[i];
        }
        
        return result;
    }
}
