import React, { useState, Fragment } from "react";
import Articles from "./articles/Articles";

export default function Container() {
  //Hook: primero se pasa la variable, luego se pasa la funcion que modifica el estado de la variable
  const [articulos, setArticulos] = useState([
    {
      id: 1,
      titulo: "TITLE HEADING 1",
      parrafo:
        "Sunt jbhgkugrelb hfskfhskjdf hdfkshfskdfhn hksdhsklfhsk hdkfhskdfnakl hdflzhfkzdhfsk hdfklshdfksjd ksdhskfsdj hdksfhkdfhskd hkdshkdfhsdkj hkshdksjhfskjsdb kdjhskdhfkfhskj dks kdbkbsx dnksdkjsd klhsdkfjhskdjh Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      id: 2,
      titulo: "TITLE HEADING 2",
      parrafo:
        "nksdkjsd klhsdkfjhskdjh Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
  ]);

  return (
    <Fragment>
      <div className="col-sm-8">
        {articulos.map((articulo) => (
          <Articles key={articulo.id} articulo={articulo} />
        ))}
      </div>
      <button
        className="btn btn-outline-primary"
        type="button"
        onClick={() => {
          setArticulos([
            {
              id: 1,
              titulo: "TITLE HEADING 3",
              parrafo:
                "Sunt jbhgkugrelb hfskfhskjdf hdfkshfskdfhn hksdhsklfhsk hdkfhskdfnakl hdflzhfkzdhfsk hdfklshdfksjd ksdhskfsdj hdksfhkdfhskd hkdshkdfhsdkj hkshdksjhfskjsdb kdjhskdhfkfhskj dks kdbkbsx dnksdkjsd klhsdkfjhskdjh Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco",
            },
            {
              id: 2,
              titulo: "TITLE HEADING 4",
              parrafo:
                "nksdkjsd klhsdkfjhskdjh Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco",
            },
          ]);
        }}
      >
        cambiar titulos
      </button>
    </Fragment>
  );
}
