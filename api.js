import express from 'express';
import morgan from 'morgan';
import cors from 'cors';


const app = express();
app.use(cors({ origin: "https://literate-space-telegram-7jr4g4wp9j7fpjvv-5500.app.github.dev" }))
app.use(express.json());
app.post('/products',(req,res) => {
    // res.json({listitems : 'True'});
	let id_product = req.query.id

	// res.json(GetListProduct(id_product))
	GetListProduct(id_product,(result) => {
		res.json({
			id_product : result[0][0],
			name_product : result[0][1],
			brand : result[0][2],
			colllections : result[0][3],                                            
			picture : result[0][4],
			descriptions : result[0][5],
			infor : result[0][6],
		})
	})

})
app.post('/list-products',(req,res) => {
	

})
app.post('/new-products',(req,res) => {
	let data = req.body
	// NewProduct(data,(result) => {

	// })
	// console.log(data.name_product)
	NewProduct(data)
})

app.get('/',(req,res) => {
	res.send('<h1>haha</h1>');
})

const PORT = 5000;

app.listen(PORT,() => {
	console.log(`Running on PORT ${PORT}`);
})