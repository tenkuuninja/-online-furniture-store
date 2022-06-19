import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toVietnamCurentcy } from "utils";
import Slider from "react-slick";
import ProductCard from "components/ProductCard";
import { Button } from "@mui/material";
import { Remove, Add, AddShoppingCart } from "@mui/icons-material";
import { addToCart } from "redux/cartSlice";

const ProductDetailPage = () => {
  const productStore = useSelector((store) => store.product.data);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [isNoContent, setNoContent] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const { url } = useParams();

  const handleChangeQuantity = (value) => {
    if (!isNaN(+value)) {
      setQuantity(Math.max(+value, 1));
    }
  };

  useEffect(() => {
    const getProduct = () => {
      if (!/^\d+-[a-z0-9-]*$/g.test(url)) {
        setNoContent(true);
        setLoading(false);
        return;
      }
      let id = +url.replace(/-.*/g, "");
      for (let p of productStore) {
        if (p.id === id) {
          setProduct(p);
          setNoContent(false);
          setLoading(false);
          return;
        }
      }
      setLoading(false);
      setNoContent(true);
    };
    getProduct();
  }, [url, productStore]);

  if (isLoading) {
    return "loading...";
  }

  if (isNoContent) {
    return "No Content";
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8">
        <div>
          <div className="max-w-sm md:max-w-full mx-auto">
            <div className="relative pt-[100%]">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={product.image}
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-slate-900 text-3xl lg:text-4xl font-semibold uppercase">
            {product.name}
          </h1>
          <p className="text-rose-600 text-5xl lg:text-6xl font-bold mt-6">
            {toVietnamCurentcy(product.price)}
          </p>
          <p className="text-slate-600 mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat non odio nec ultricies. Ut vitae libero est. In
            pellentesque, mauris vel hendrerit vestibulum, enim diam facilisis
            mauris, id sodales urna sapien quis diam. Pellentesque ante leo,
            mollis eget dui in, consequat suscipit erat. Aenean rutrum id ante
            ac lacinia. Donec consequat malesuada elit, vitae rutrum lectus
            rhoncus sed. Fusce nunc arcu, blandit id ultrices rhoncus, posuere
            non eros. Vivamus non viverra lorem. Pellentesque blandit lorem ut
            porttitor semper. Donec sit amet turpis sapien. Quisque in dolor
            iaculis, eleifend lorem blandit, pretium nulla. Mauris posuere mi id
            tortor convallis, ut tincidunt enim tempus. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Cras aliquet eu nisl quis consequat. Ut mauris sem,
            rhoncus in faucibus et, aliquam sit amet augue.{" "}
          </p>
          <div className="inline-flex items-center border mt-6">
            <div
              className="p-1 cursor-pointer"
              onClick={() => handleChangeQuantity(quantity - 1)}
            >
              <Remove />
            </div>
            <div className="w-12 h-full border-x p-1">
              <input
                className="w-full p-[1px] outline-none text-center"
                type="text"
                value={quantity}
                onChange={(e) => handleChangeQuantity(e.target.value)}
              />
            </div>
            <div
              className="p-1 cursor-pointer"
              onClick={() => handleChangeQuantity(quantity + 1)}
            >
              <Add />
            </div>
          </div>
          <div className="mt-6">
            <Button
              variant="contained"
              size="large"
              startIcon={<AddShoppingCart />}
              onClick={(e) => dispatch(addToCart({ product, quantity }))}
            >
              Thêm vào giỏ hàng
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <h3 className="text-3xl text-[#244d4d] font-extrabold uppercase">
          Sản phẩm tương tự
        </h3>
        <Slider
          dots={false}
          infinite={false}
          slidesToShow={5}
          slidesToScroll={5}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ]}
        >
          {productStore
            ?.filter((item) => item?.category?.id === product?.category?.id)
            ?.map((item, i) => (
              <div key={i} className="p-1 md:p-2 xl:p-4">
                <ProductCard product={item} />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductDetailPage;
