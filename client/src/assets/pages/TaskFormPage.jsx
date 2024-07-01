import { useForm } from "react-hook-form";

export function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />
        <textarea
          placeholder="Description"
          rows="3"
          {...register("description", { required: true })}
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  );
}
