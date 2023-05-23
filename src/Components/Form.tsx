import React from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  description: string;
  amount: number;
  category: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description", { required: true })}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description?.type === "required" && (
          <p className="text-danger">Description is required</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="Amount">Amount</label>
        <input
          {...register("amount", { required: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount?.type === "required" && (
          <p className="text-danger">Amount is required</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category">Category</label>
        <input
          {...register("category", { required: true })}
          id="category"
          type="text"
          className="form-control"
        />
        {errors.category?.type === "required" && (
          <p className="text-danger">Amount is required</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
