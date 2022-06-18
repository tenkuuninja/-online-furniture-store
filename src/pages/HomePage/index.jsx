import { Fragment } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { Send, Lock, Undo } from "@mui/icons-material";
import ProductCard from "components/ProductCard";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const imgs = [
  { src: "/images/slide-1.jpg" },
  { src: "/images/slide-2.jpg" },
  { src: "/images/slide-3.jpg" },
  { src: "/images/slide-4.jpg" },
];

const services = [
  {
    icon: <Send />,
    title: "Giao hàng toàn quốc",
    desc: "Vận chuyển,giao hàng toàn quốc với mọi mặt hàng",
  },
  {
    icon: <Lock />,
    title: "Thanh toán an toàn",
    desc: "Quý khách hàng nhận hàng mới phải thanh toán",
  },
  {
    icon: <Undo />,
    title: "Đổi trả trong 20 ngày",
    desc: "Tất cả sản phẩm áp dụng đổi trả 1/1 trong 20 ngày",
  },
];

const spaces = [
  {
    image: "/images/space-1.webp",
    no: "01",
    title: "Phòng khách",
    desc: "Sofa, ghế tựa, ghế xoay...",
  },
  {
    image: "/images/space-2.webp",
    no: "02",
    title: "Nhà bếp",
    desc: "Tủ bếp, kệ đồ dùng nhà bếp...",
  },
  {
    image: "/images/space-3.webp",
    no: "03",
    title: "Phòng ngủ",
    desc: "Các loại giường ngủ, tủ áo...",
  },
];

const HomePage = () => {
  const products = useSelector((store) => store.product.data);
  return (
    <Fragment>
      <div className="mb-8">
        <Slider {...settings}>
          {imgs.map((item, i) => (
            <div className="relative pt-[56.25%]" key={i}>
              <img
                className="absolute inset-0 object-cover"
                src={item.src}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="container mx-auto mt-10 px-4 space-y-6 md:space-y-0">
        {services.map((item, i) => (
          <div
            className="inline-flex flex-col lg:flex-row items-center lg:items-start w-full md:w-1/3 lg:px-4"
            key={i}
          >
            <div className="bg-primary text-white p-3 inline rounded-full">
              {item.icon}
            </div>
            <div className="flex-grow text-center lg:text-left mt-2 lg:mt-0 lg:ml-2">
              <p className="uppercase text-lg font-bold text-primary">
                {item.title}
              </p>
              <p className="font-light text-slate-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-slate-50 py-12 mt-10">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl text-[#244d4d] font-extrabold uppercase">
            Không gian nội thất
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mt-4">
            {spaces.map((item, i) => (
              <div key={i}>
                <img className="w-full" src={item.image} alt="" />
                <div className="flex mt-4">
                  <div className="text-primary font-light text-6xl md:text-4xl lg:text-6xl underline">
                    {item.no}
                  </div>
                  <div className="ml-4">
                    <p className="text-slate-800 font-extrabold text-xl uppercase leading-loose">
                      {item.title}
                    </p>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <h3 className="text-3xl text-[#244d4d] font-extrabold uppercase px-4">
          Từ cửa hàng
        </h3>
        <Slider
          dots={false}
          infinite={false}
          slidesToShow={5}
          slidesToScroll={5}
          centerPadding="16px"
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
          {products.map((item, i) => (
            <div key={i} className="p-4">
              <ProductCard product={item} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="bg-slate-50 py-12 mt-10">
        <div className="container mx-auto">
          <h3 className="text-3xl text-[#244d4d] font-extrabold uppercase">
            Khách hàng đánh giá
          </h3>
          <Slider
            dots={false}
            infinite={false}
            slidesToShow={5}
            slidesToScroll={5}
            centerPadding="16px"
          >
            {products.map((item, i) => (
              <div key={i} className="p-4">
                <ProductCard product={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
