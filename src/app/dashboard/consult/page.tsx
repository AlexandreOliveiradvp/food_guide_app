"use client";
import api from "@/api/api";
import { useFormik } from "formik";
import * as Yup from "yup";

const ConsultContent = () => {
  const request = (value: string) => {
    api
      .get(`/recipes/complexSearch?query=${value}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const formik = useFormik({
    initialValues: {
      nameProduct: "",
    },
    validationSchema: Yup.object({
      nameProduct: Yup.string().required("Preenchimeto Obrigatório"),
    }),
    onSubmit: (values) => {
      request(values.nameProduct);
    },
  });

  return (
    <div>
      <div className="grid grid-cols-3 py-3 z-0">
        <div className="col-span-3 w-6/12">
          <h1 className="page-title">Consult Recipes</h1>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex w-full">
              <div className="wrapper-input-consult">
                <label htmlFor="" className="label">
                  Search Recipies:
                </label>
                <input
                  type="text"
                  className="input"
                  {...formik.getFieldProps("nameProduct")}
                />
                {formik.touched.nameProduct && formik.errors.nameProduct ? (
                  <span className="validation-warning">
                    {formik.errors.nameProduct}
                  </span>
                ) : null}
              </div>
              <button className="btn-default ms-2 mt-6" type="submit">
                Search
              </button>
            </div>
          </form>
          <div className="w-full content-search">
            <div className="card-search rounded-md p-2">
              <label>Search Result</label>
              <div className="w-full flex justify-center">
                <div className="loader"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 pt-6">
          <div className="products-content rounded-md">
            <div className="px-4">
              <p className="title">Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultContent;
