const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  });
  

  const Order = sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    customerId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    product: {
      type: DataTypes.STRING
    },
    count: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING
    },
    additionalInfo: {
      type: DataTypes.STRING
    }
  });
  

  const OrderHistory = sequelize.define('order_history', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    orderId: {
      type: DataTypes.INTEGER,
      references: {
        model: Order,
        key: 'id'
      }
    }
  });
  
  // Устанавливаем связи между моделями
  User.hasMany(Order, { foreignKey: 'customerId' });
  Order.belongsTo(User, { foreignKey: 'customerId' });
  User.hasMany(OrderHistory, { foreignKey: 'userId' });
  Order.hasMany(OrderHistory, { foreignKey: 'orderId' });
  OrderHistory.belongsTo(User, { foreignKey: 'userId' });
  OrderHistory.belongsTo(Order, { foreignKey: 'orderId' });
  
  // Синхронизация моделей с базой данных
  sequelize.sync();

module.exports = {
    User,
    Order,
    OrderHistory
};