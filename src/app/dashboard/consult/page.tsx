"use client";
import api from "@/api/api";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import { space } from "postcss/lib/list";

interface Recipe {
  image: string;
  title: string;
  id: number;
  name: string;
}

const ConsultContent = () => {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>();
  const [selectRecipe, setselectRecipe] = useState<Recipe[]>([]);

  const buildingRecipe = (obj: Recipe) => {
    setselectRecipe((state) => [...state, obj]);
  };

  const request = async (nameProduct: string, typeProduct: string) => {
    setLoading(true);
    let stringRequest: string = "";
    typeProduct == "recipe"
      ? (stringRequest = `/recipes/complexSearch?query=${nameProduct}`)
      : (stringRequest = `food/${typeProduct}/search?query=${nameProduct}`);
    const response = await api.get(stringRequest);
    const results = response.data.results;
    if (results && Array.isArray(results)) {
      setRecipes(results);
    }
    setLoading(false);
  };
  const formik = useFormik({
    initialValues: {
      nameProduct: "",
      typeProduct: "recipe",
    },
    validationSchema: Yup.object({
      nameProduct: Yup.string().required("Preenchimeto Obrigatório"),
    }),
    onSubmit: (values) => {
      request(values.nameProduct, values.typeProduct);
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
                <select
                  className="select"
                  {...formik.getFieldProps("typeProduct")}
                  onChange={(event) => {
                    formik.handleChange(event);
                    setRecipes([]);
                  }}
                >
                  <option value="recipe">Recipe</option>
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
              {!loading &&
                recipes &&
                recipes.length > 0 &&
                String(formik.values.typeProduct) === "recipe" && (
                  <div className="grid grid-cols-4 pt-4">
                    {recipes.map((element) => (
                      <div
                        className="col-span-1 container-element pb-3 cursor-pointer"
                        key={element.id}
                      >
                        <div className="flex justify-center">
                          {
                            <Image
                              src={element.image}
                              alt="Picture of the author"
                              className="img-recipe"
                              width={60}
                              height={60}
                            />
                          }
                        </div>
                        <div className="text-center pt-2">
                          <span>{element.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              {!loading &&
                recipes &&
                recipes.length > 0 &&
                String(formik.values.typeProduct) === "ingredients" && (
                  <div className="grid grid-cols-4 pt-4">
                    {recipes.map((element) => (
                      <div
                        className="col-span-1 container-element pb-3 cursor-pointer"
                        key={element.id}
                        onClick={() => buildingRecipe(element)}
                      >
                        <div className="flex justify-center">
                          {
                            <Image
                              src={`https://img.spoonacular.com/ingredients_250x250/${element.image}`}
                              alt="Picture of the author"
                              className="img-recipe"
                              width={150}
                              height={150}
                            />
                          }
                        </div>
                        <div className="text-center pt-2">
                          <span>{element.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          </div>
        </div>
        <div className="col-span-1 pt-6">
          <div className="products-content rounded-md">
            <div className="px-2 py-1 grid grid-cols-2">
              <div>
                <p className="title">Recipe</p>
              </div>
              <div className="pt-2 text-end">
                <button className="btn-add p-1" title="add recipe">
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4">
              {selectRecipe.map((item) => (
                <div className="col-span-1" key={item.id}>
                  <div className="flex justify-center">
                    {
                      <Image
                      src={`https://img.spoonacular.com/ingredients_250x250/${item.image}`}
                        alt="Picture of the author"
                        className="img-recipe-selected"
                        width={60}
                        height={60}
                      />
                    }
                  </div>
                  <div className="text-center pt-2">
                    <span className="span-recipe-selected">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultContent;
