import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  // console.log(params);

  const onSubmit = handleSubmit(async (data) => {
    // console.log(data);
    // await createTask(data);
    // navigate("/tasks");
    // Prueba
    // const res = await createTask(data);
    // console.log(res);
    if (params.id) {
      // console.log("actualizando");
      await updateTask(params.id, data);
      toast.success("Tarea actualizada", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "white",
        },
      });
    } else {
      await createTask(data);
      toast.success("Tarea Creada", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "white",
        },
      });
    }
    navigate("/tasks");
  });
  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        // console.log("Obteniendo datos");
        const res = await getTask(params.id);
        // console.log(res);
        setValue("title", res.data.title);
        setValue("description", res.data.description);
      }
    }
    loadTask();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.title && <span>This field is required</span>}
        <textarea
          placeholder="Description"
          rows="3"
          {...register("description", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></textarea>
        {errors.description && <span>This field is required</span>}
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>
      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("Are you sure?");
              if (accepted) {
                await deleteTask(params.id);
                toast.success("Tarea Eliminada", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "white",
                  },
                });
                navigate("/tasks");
              }
            }}
          >
            Delete
          </button>
        </div>
      )}{" "}
      {/* si en el params hay un id, se mostrara el boton delete, si se agrega no se mostrara el boton */}
    </div>
  );
}
