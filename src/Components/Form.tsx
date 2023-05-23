import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { categories } from "../App";

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
        <select id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
