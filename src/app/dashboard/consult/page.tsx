"use client";
import api from "@/api/api";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
//import Image from "next/image";

interface Recipe {
  image: string
  title: string;
}

const ConsultContent = () => {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>();

  const request = async (value: string) => {
    setLoading(true);
    const response = await api.get(`/recipes/complexSearch?query=${value}`);
    const results = response.data.results;
    if (results && Array.isArray(results)) {
      setRecipes(results);
    }
    setLoading(false);
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
              <div className="wrapper-input-consult me-2">
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
              <div>
                <label htmlFor="" className="label">
                  Type:
                </label>
                <select className="select">
                  <option value="revenue" selected>
                    Revenue
                  </option>
                  <option value="ingredients">Ingredients</option>
                </select>
              </div>
              <button className="btn-default ms-2 me-2 mt-6" type="submit">
                Search
              </button>
            </div>
          </form>
          <div className="w-full content-search">
            <div className="card-search rounded-md p-2">
              <label>Search Result</label>
              {loading ? (
                <div className="w-full flex justify-center">
                  <div className="loader"></div>
                </div>
              ) : null}
              {recipes && recipes.length > 0 ? (
                <div className="grid grid-cols-4 pt-4">
                  <div className="col-span-1">
                    <div className="flex justify-center">
                      {/* <Image
                      src={}
                      alt="Picture of the author"
                      className="logo-header"
                    /> */}
                      <div className="img-revenue"></div>
                    </div>
                    <div className="text-center">
                      <span>Name revenue</span> <br />
                      <small>Lorem Ipsum sit Dolor Amet</small>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="col-span-1 pt-6">
          <div className="products-content rounded-md">
            <div className="px-2 py-1">
              <p className="title">Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultContent;
