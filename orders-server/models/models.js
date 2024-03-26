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
    },
    password :{
      type: DataTypes.STRING
    }
  });
  

  const Orders = sequelize.define('Orders', {
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
  

  const OrdersHistory = sequelize.define('Orders_history', {
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
    OrdersId: {
      type: DataTypes.INTEGER,
      references: {
        model: Orders,
        key: 'id'
      }
    }
  });
  
  // Устанавливаем связи между моделями
  User.hasMany(Orders, { foreignKey: 'customerId' });
  Orders.belongsTo(User, { foreignKey: 'customerId' });
  User.hasMany(OrdersHistory, { foreignKey: 'userId' });
  Orders.hasMany(OrdersHistory, { foreignKey: 'OrdersId' });
  OrdersHistory.belongsTo(User, { foreignKey: 'userId' });
  OrdersHistory.belongsTo(Orders, { foreignKey: 'OrdersId' });
  
  // Синхронизация моделей с базой данных
  sequelize.sync();

module.exports = {
    User,
    Orders,
    OrdersHistory
};