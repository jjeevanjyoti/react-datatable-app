import React, { useEffect, useState, useMemo } from "react";
import { TableHeader, Pagination, Search } from "../../components/DataTable";
import data from "../../components/data";

const DataTable2 = () => {
  const [comments, setComments] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });

  const ITEMS_PER_PAGE = 10;

  const headers = [
    { name: "Name", field: "name", sortable: true },
    { name: "position", field: "position", sortable: true },
    { name: "office", field: "office", sortable: true },
    { name: "age", field: "age", sortable: false },
    { name: "date", field: "date", sortable: false },
    { name: "salary", field: "salary", sortable: true },
  ];

  useEffect(() => {
    const getData = () => {
      console.log(data.rows.length);
      setComments(data.rows);
    };
    getData();
  }, []);

  const commentsData = useMemo(() => {
    let computedComments = comments;

    if (search.toLowerCase()) {
      computedComments = computedComments.filter(
        (comment) =>
          comment.name.toLowerCase().includes(search.toLowerCase()) ||
          comment.position.toLowerCase().includes(search.toLowerCase()) ||
          comment.office.toLowerCase().includes(search.toLowerCase()) ||
          comment.age.toLowerCase().includes(search.toLowerCase()) ||
          comment.date.toLowerCase().includes(search.toLowerCase()) ||
          comment.salary.toLowerCase().includes(search.toLowerCase())
      );
      console.log(computedComments);
    }

    setTotalItems(computedComments.length);

    //Sorting comments
    if (sorting.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      computedComments = computedComments.sort(
        (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
      );
    }

    //Current Page slice
    return computedComments.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [comments, currentPage, search, sorting]);

  // console.log(commentsData);
  return (
    <>
      <div className="row w-100">
        <div className="col mb-3 col-12 text-center">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 d-flex flex-row-reverse">
              <Search
                onSearch={(value) => {
                  setSearch(value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Pagination
                total={totalItems}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>

          <table className="table table-striped">
            <TableHeader
              headers={headers}
              onSorting={(field, order) => setSorting({ field, order })}
            />
            <tbody>
              {commentsData.map((comment, idx) => {
                return (
                  <tr key={idx}>
                    {headers.map((col, colIdx) => (
                      <td key={`${idx}-${colIdx}`}>{comment[col.field]}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataTable2;
