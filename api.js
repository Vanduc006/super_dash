import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { GetProduct } from './routes/GetProduct.js';
import { UpImage } from './routes/UpImage.js';
import { NewProduct } from './routes/NewProduct.js';

const app = express();
app.use(morgan('combined'))
app.use(cors({ origin: "https://literate-space-telegram-7jr4g4wp9j7fpjvv-5500.app.github.dev" }))
app.use(express.json({limit: '1000mb'}));
app.use(express.urlencoded({limit: '1000mb'}));
app.post('/products',(req,res) => {
    // res.json({listitems : 'True'});
	let id_product = req.query.id

	// res.json(GetListProduct(id_product))
	GetProduct(id_product,(result) => {
		res.json(result[0])
	})
})
app.post('/storage',(req,res) => {
	console.log(req.body.filename)
	UpImage(req.body.filename,req.body.data)
	res.json({success:'success'})
})
app.post('/list-products',(req,res) => {
	

})

app.post('/new-products',(req,res) => {
	let data = req.body
	console.log(data)
	NewProduct(data.name_product,data.brand,data.collection,data.picture,(result) => {
		
		console.log(result)
	})
	res.json({success:'Đăng sản phẩm thành công'})
	// NewProduct(data,(result) => {

	// })

	// {
	// 	name_product: '',
	// 	brand: '',
	// 	collection: '',
	// 	picture: [ 'FMF4H', '4GQLC' ],
	// 	descriptions: '',
	// 	infor: ''
	//   }
})

app.get('/',(req,res) => {
	res.send('<h1>haha</h1>');
})

const PORT = 5000;

app.listen(PORT,() => {
	console.log(`Running on PORT ${PORT}`);
})