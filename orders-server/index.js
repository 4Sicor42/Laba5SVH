const express = require('express');
const fs = require('fs');
const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.use(express.static('server')); 
app.use(express.json());

const sendFormattedResponse = (req, res, data) => {
  switch (req.headers.accept) {
    case 'application/json':
      res.json(data);
      break;
    case 'text/html':
      res.send(`<pre>${JSON.stringify(data, null, 2)}</pre>`);
      break;
    case 'application/xml':
      let xml = '<root>\n';
      for (let key in data) {
        xml += `  <${key}>${data[key]}</${key}>\n`;
      }
      xml += '</root>';
      res.set('Content-Type', 'text/xml');
      res.send(xml);
      break;
    default:
      res.json(data);
  }
};

app.post('/api/shops', (req, res) => {
    fs.readFile('stocks.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
        return;
      }
  
      try {
        const shops = JSON.parse(data);
        res.json(shops);
      } catch (parseError) {
        console.error(parseError);
        res.status(500).json({ error: 'Ошибка парсинга данных' });
      }
    });
  });

app.post('/api/shops/decrease', (req, res) => {
  const { productId } = req.body;

  fs.readFile('orders.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
      return;
    }

    try {

      const shops = JSON.parse(data);


      const product = shops.find(item => item.id === productId);

      if (!product) {
        res.status(404).json({ error: 'Товар не найден' });
        return;
      }

      if (product.quantity > 0) {
        product.quantity -= 1;
      }


      fs.writeFile('orders.json', JSON.stringify(shops), 'utf8', err => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Server error' });
          return;
        }

        // Возвращаем успешный статус и сообщение
        res.status(200).json({ message: 'Sucs' });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
});

app.get('/', (req, res) => {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server error');
        return;
      }
  
      res.send(data);
    });
  });
app.get('/data', (req, res) => {
    fs.readFile('orders.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
        return;
      }
  
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseError) {
        console.error(parseError);
        res.status(500).json({ error: 'Ошибка данных' });
      }
    });
  });
app.get('/gets', (req, res) => {
    try {
      const data = JSON.parse(fs.readFileSync('orders.json', 'utf8'));
      sendFormattedResponse(req, res, data);
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  

  
  app.listen(5000, () => {
    console.log('Server portT : 5000');
  });