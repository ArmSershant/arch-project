import React, { useState } from "react";
import ReactDOM from "react-dom";
import aboutBgImg from '../../../assets/img/bg/about-bg.png';
import Papa from "papaparse";
const Product = () => {
 const [data, setData] = useState({});
  Papa.parse("https://docs.google.com/spreadsheets/d/1pzzCKjCj5XPCVyj3kTQOVA-0Rrl9rIt5iySwAIal5n0/pub?output=csv", {
    download: true,
    header: true,
    complete: (results) => {
      setData(results.data);
    },
  });
  const products = Array.from(data);
  return ( <section id="blog" className="blog-area  p-relative pt-120 pb-120 fix"  style={{ background: `url(${aboutBgImg}) no-repeat right bottom` }}>
            <div className="container">
                <div className="row">
					 {products.map((data, i) => (
					 <div className="col-lg-4 col-md-6" key={i}>
						<div className="single-post2 mb-30  p-relative wow fadeInDown animated" data-animation="fadeInRight" data-delay=".4s">
							<div className="blog-thumb2">

									<a href="/" ><img src={data.Thumbnail} alt={data.ProductName} /></a>

							</div>
							<div className="blog-content2">
								<div className="row">
									<div className="col-lg-12">
										<a href="/"><h4>{data.ProductName}</h4></a>

										<p id="services">{data.ProductDescription}</p>

									</div>
								</div>
							</div>
						</div>
					</div>
					))}
				</div>
            </div>
        </section>
    );
}

export default Product;

