import { useState } from "react";
import { useSelector } from "react-redux";
import { Pagination, Button, IconButton } from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";
import EditDialog from "./EditDialog";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";

const AdminCategoryPage = () => {
  const users = useSelector((store) => store.user.data);
  const [page, setPage] = useState(1);
  const [dialogStatus, setDialogStatus] = useState("close");
  const [data, setData] = useState(null)

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-10 ">
        <h2 className="text-3xl text-slate-700 font-bold">Người dùng</h2>
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
            <td className="py-4">Tên</td>
            <td className="py-4 px-2">Tên đăng nhập</td>
            <td className="py-4 px-2">Email</td>
            <td className="py-4 px-2">Giới tính</td>
            <td className="py-4 px-2">Vai trò</td>
          </tr>
        </thead>
        <tbody>
          {users.map((item, i) => (
            <tr
              key={i}
              className="border-t border-slate-100 text-slate-600 font-semibold"
            >
              <td className="py-4">{item.name}</td>
              <td className="py-4 px-2">{item.username}</td>
              <td className="py-4 px-2">{item.email}</td>
              <td className="py-4 px-2">{item.gender === "F" ? "Nữ" : "Nam"}</td>
              <td className="py-4 px-2">{item.role === "user" ? "user" : "admin"}</td>
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
        {users?.length > 10 && (
          <Pagination
            page={page}
            count={Math.ceil(users?.length / 10)}
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
