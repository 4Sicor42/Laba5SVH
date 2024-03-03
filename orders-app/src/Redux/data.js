// массив данных
export const orders =[
  
    {
    "id": 1,
    "customer": "ИП Петров",
    "product": "Станок токарный",
    "count": 2,
    "status": "На складе",
    "price": 150000,
    "image": "stanok",
    "additionalInfo": "Контактный телефон: +7-999-123-45-67, Дата поставки: 10.11.2022, Гарантийный срок: 12 месяцев"
    },
    {
    "id": 2,
    "customer": "ООО Автоматика",
    "product": "Электродвигатель",
    "count": 15,
    "status": "На складе",
    "price": 5000,
    "image": "electrodvigatel",
    "additionalInfo": "Контактный телефон: +7-888-222-11-33, Схема подключения: схема1.pdf, Инструкция по эксплуатации: инструкция.doc"
    },
    {
    "id": 3,
    "customer": "ЗАО Машиностроение",
    "product": "Редуктор",
    "count": 5,
    "status": "Под заказ",
    "price": 30000,
    "image": "reduktor",
    "additionalInfo": "Контактный телефон: +7-777-555-44-22, Дополнительные комплектующие: валы, шестерни, Инструкция по монтажу: инструкция_монтаж.pdf"
    },
    {
    "id": 4,
    "customer": "OOO Строительные материалы",
    "product": "Насос циркуляционный",
    "count": 3,
    "status": "Под заказ",
    "price": 25000,
    "image": "nasos",
    "additionalInfo": "Контактный телефон: +7-666-444-33-11, Срок оплаты: до 15.11.2022, Штраф за просрочку: 2% за каждый день просрочки"
    },
    {
    "id": 5,
    "customer": "ФГУП Атомэнергомаш",
    "product": "Корпус реактора",
    "count": 1,
    "status": "Под заказ",
    "price": 5000000,
    "image": "reactor",
    "additionalInfo": "Контактный телефон: +7-555-333-22-11, Схема соединений: схема_соединений.pdf, Инженер-контакт: Иванов И.И."
    }
  ]
  
  export const updateOrder = async (updatedOrder) => {

    const index = orders.findIndex(order => order.id === updatedOrder.id)
  

    orders[index] = updatedOrder;
  
    return updatedOrder;
  }