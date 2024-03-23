import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const baseUrl = "http://127.0.0.1:8000/api";

const StudentStudyMaterial = () => {
  const [materialData, setMaterialData] = useState([]);

  const { course_id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/study-material/${course_id}`
      );
      setMaterialData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const Swal = require("sweetalert2");
  const handleDelete = (material_id) => {
    Swal.fire({
      title: "Delete!",
      text: "Do you want delete the material",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios
            .delete(baseUrl + "/study-material-detail/" + material_id)
            .then((res) => {
              window.location.reload();
            });
        } catch (error) {
          Swal.fire("error", "Data has not been deleted.!!!");
        }
      } else {
        Swal.fire("error", "Data has not been deleted.!!!");
      }
    });
  };

  useEffect(() => {
    document.title = "Study Material";
    getData();
  }, []);
  return (
    <div className="basis-1/2">
      <h1 className="text-2xl">All Material {materialData.length}</h1>
      <div className="flex mt-12 flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      No
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-4">
                      View
                    </th>
                  </tr>
                </thead>
                {materialData.map((material) => (
                  <tbody>
                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {material.id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {material.title}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Link
                          target="__blank"
                          className="h-[42px] w-[72px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out"
                          to={material.study_material}
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentStudyMaterial;
