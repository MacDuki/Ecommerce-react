import { Layout } from "../../Layout/Index";
import "./Home.css";
function Home() {
	return (
		<>
			<Layout>
				<section className='welcome-section'>
					<div>
						<h1>Bienvenido a GARAGE SHOP </h1>
						<div className='img-container'>
							<div>
								<img src='src\assets\img\clothing-model.jpeg' />
							</div>
							<div>
								<img src='src\assets\img\electronics-model.jpg' />
							</div>
							<div>
								<img src='src\assets\img\jewelery-model.jpeg' />
							</div>
						</div>
					</div>
				</section>
				<section>
					<h2></h2>
					<article></article>
				</section>
				<footer>
					<p></p>
				</footer>
			</Layout>
		</>
	);
}

export { Home };
