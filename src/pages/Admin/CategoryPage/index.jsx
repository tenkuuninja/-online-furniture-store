import { useState } from "react";
import { useSelector } from "react-redux";
import { Pagination, Button, IconButton } from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";
import EditDialog from "./EditDialog";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";

const AdminCategoryPage = () => {
  const categories = useSelector((store) => store.category.data);
  const [page, setPage] = useState(1);
  const [dialogStatus, setDialogStatus] = useState("close");
  const [data, setData] = useState(null);

  return (
    <div className="p-4 lg:p-10">
      <div className="flex justify-between items-center mb-10 ">
        <h2 className="text-3xl text-slate-700 font-bold">Danh mục</h2>
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
      <table className="w-full rounded-lg shadow">
        <thead>
          <tr className="text-slate-900 font-bold bg-slate-100">
            <td className="p-4 pr-2">Tên</td>
            <td className="px-2 py-4">Mô tả</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {categories.map((item, i) => (
            <tr
              key={i}
              className="border-t border-slate-100 text-slate-800"
            >
              <td className="p-4 pr-2">{item.name}</td>
              <td className="px-2 py-4 line-clamp-3">{item.description}</td>
              <td className="w-1 whitespace-nowrap">
                <div className="ml-4">
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
        {categories.length > 10 && (
          <Pagination
            page={page}
            count={Math.ceil(categories.length / 10)}
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
