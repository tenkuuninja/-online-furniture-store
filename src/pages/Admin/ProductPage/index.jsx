import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Pagination, Button, IconButton } from "@mui/material";
import { Add, Edit, Delete, Link } from "@mui/icons-material";
// import { ProductApi } from "apis";
import EditDialog from "./EditDialog";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";

const AdminCategoryPage = () => {
  const products = useSelector((store) => store.product.data);
  const [page, setPage] = useState(1);
  const [dialogStatus, setDialogStatus] = useState("close");
  const [data, setData] = useState(null);

  let navigate = useNavigate();

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-10 ">
        <h2 className="text-3xl text-slate-700 font-bold">Sản phẩm</h2>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => {
            setData({});
            setDialogStatus("edit");
          }}
        >
          Thêm
        </Button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="py-4 text-slate-700 font-bold">
            <td className="py-4"></td>
            <td className="py-4 px-2">Tên</td>
            <td className="py-4 px-2">Giá</td>
            <td className="py-4 px-2">Tồn kho</td>
            <td className="py-4 px-2">Mô tả</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item, i) => (
            <tr
              key={i}
              className="border-t border-slate-100 text-slate-600 font-semibold"
            >
              <td className="py-2 w-28">
                <img
                  className="w-24 h-24 object-cover"
                  src={item.image}
                  alt=""
                />
              </td>
              <td className="py-4 pr-2">{item.name}</td>
              <td className="py-4 px-2">{item.price}đ</td>
              <td className="py-4 px-2">{item.stock}</td>
              <td className="py-4 px-2">{item.description}</td>
              <td className="w-1 whitespace-nowrap">
                <div className="ml-4">
                  <IconButton onClick={() => navigate("")}>
                    <Link color="secondary" />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      setData(item);
                      setDialogStatus("edit");
                    }}
                  >
                    <Edit color="info" />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      setData(item);
                      setDialogStatus("delete");
                    }}
                  >
                    <Delete color="error" />
                  </IconButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-10 mb-4">
        {products?.length > 10 && (
          <Pagination
            page={page}
            count={Math.ceil(products?.length / 10)}
            hidePrevButton
            hideNextButton
            showFirstButton
            showLastButton
            onChange={(e, value) => value !== null && setPage(value)}
          />
        )}
      </div>
      <EditDialog
        isOpen={dialogStatus === "edit"}
        onClose={() => setDialogStatus("close")}
        data={data}
      />
      <ConfirmDeleteDialog
        isOpen={dialogStatus === "delete"}
        onClose={() => setDialogStatus("close")}
        data={data}
      />
    </div>
  );
};

export default AdminCategoryPage;
