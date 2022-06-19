import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { InputBase } from "@mui/material";
import { Search, Close } from "@mui/icons-material";
import ProductCard from "components/ProductCard";

const ProductListPage = () => {
  const productStore = useSelector((store) => store.product.data);
  const [products, setProducts] = useState(productStore);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let re = new RegExp(search, "gi");
    setProducts(productStore.filter((item) => re.test(item.name)));
  }, [search, productStore]);

  return (
    <div className="container mx-auto">
      <div className="flex items-center my-4 mx-4 p-3 rounded-lg bg-slate-50 text-slate-500">
        <Search />
        <div className="px-2 grow">
          <InputBase
            value={search}
            fullWidth
            placeholder="Tìm kiếm ..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Close onClick={() => setSearch("")} />
      </div>
      <div className="mx-4 mt-2">
        <span className="text-sm text-slate-400">
          {search?.length > 0 ? "Kết quả tìm kiếm của: " : "Tất cả sản phẩm"}
        </span>
        {search?.length > 0 && (
          <span className="text-sm text-slate-600 font-semibold">
            "{search}"
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-3 md:p-3 xl:p-0">
        {products.map((item, i) => (
          <div className="p-1 md:p-2 xl:p-4" key={i}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
