import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postSpending,
  putSpending,
  deleteSpending,
  totalSpending,
} from "../../redux/spending/actionSpending";
import { getBuildings } from "../../redux/building/buildingActions";
import { Link } from "react-router-dom";
import "./form.css";
import {
  Domain,
  Room,
  LocationCity,
  Receipt,
  ListAlt,
} from "@material-ui/icons";
import {
  Typography,
  InputLabel,
  NativeSelect,
  Grid,
  Button,
  Container,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../themeStyle";
import swal from "sweetalert";

const Form = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: 50,
      marginBottom: 30,
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  const dispatch = useDispatch();
  //tendria que traer con un use selector el listado de edificios y con un use effect ejecutarlo

  const { buildingArray, totalSpend  } = useSelector(state => {
    console.log("entrando al useSelector")
    return {
      buildingArray: state.buildingReducer.allBuildings,
      totalSpend: state.reducerSpending.totalSpending
      
    };
  });

  useEffect(() => {
    dispatch(getBuildings());
    dispatch(totalSpending());
  }, [dispatch]);

  let newSpending = {};

  if (props.match.path === "/spendings/newSpending") {
    newSpending = {
      date: "",
      building: 1,
      concept: "",
      supplier: "",
      details: "",
      amount: 0,
    };
  } else {
    newSpending = {
      date: totalSpend.filter(
        (elem) => elem.id === parseInt(props.match.params.id)
      )[0].date,
      building: 1,
      concept: totalSpend.filter(
        (elem) => elem.id === parseInt(props.match.params.id)
      )[0].concept,
      supplier: totalSpend.filter(
        (elem) => elem.id === parseInt(props.match.params.id)
      )[0].supplier,
      details: totalSpend.filter(
        (elem) => elem.id === parseInt(props.match.params.id)
      )[0].details,
      amount: totalSpend.filter(
        (elem) => elem.id === parseInt(props.match.params.id)
      )[0].amount,
    };
  }

  //con este estado tomo el valor seleccionado
  const [spending, setSpending] = useState(newSpending);
  const [selectedBuild, setSelectedBuild] = useState({ id: [] });

  const handleSelect = (e) => {
    let select = document.getElementById("building");

    if (select) {
      let selectValue = select.options[select.selectedIndex].value;
      let selectedBuildName = select.options[select.selectedIndex].innerText;
      setSelectedBuild({
        ...selectedBuild,
        name: selectedBuild.id.concat(selectedBuildName),
      });
      /*  let selectBuild = spending.bulding.push(selectValue); */
      setSpending({ ...spending, building: parseInt(selectValue) });
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === "amount") {
      setSpending({
        ...spending,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setSpending({
        ...spending,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleUpdate = (e) => {
    dispatch(putSpending([parseInt(props.match.params.id), spending]));
    swal("Gasto Editado!", "Gracias!", "success");
  };

  const handleDelete = (e) => {
    //
    dispatch(deleteSpending(parseInt(props.match.params.id)));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (spending.supplier === "")
      return alert("supplier Field Cannot Be Empty");
    if (spending.amount === "") return alert("Concept Field Cannot Be Empty");
    console.log(spending)
    dispatch(postSpending(spending));
    swal("Gasto Agregado!", "Gracias!", "success");
    setSpending(
      (newSpending = {
        date: "",
        building: 0,
        concept: "",
        supplier: "",
        details: "",
        amount: 0,
      })
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="mainContainer">
        <form>
          <Container>
            <div className="componentHeading1">
              <Typography variant="h2" className="componentHeading1">
                Modificar gastos:
              </Typography>
            </div>
          </Container>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            margin="auto"
            className="componentDataBox"
            spacing={1}
          >
            <Grid item xs={6}>
              <Grid
                container
                spacing={1}
                alignItems="flex-end"
                className="element"
              >
                <Grid item>
                  <Domain />
                </Grid>
                <Grid item>
                  <InputLabel htmlFor="select">Edificio</InputLabel>
                  <NativeSelect
                    onChange={handleSelect}
                    name="building"
                    id="building"
                  >
                    <option> Elegir Edificio </option>

                    {buildingArray && buildingArray.length > 0
                      ? buildingArray.map((building) => {
                          return (
                            <option key={building.id} value={building.id}>
                              {building.name}
                            </option>
                          );
                        })
                      : ""}
                  </NativeSelect>
                  {/* <TextField id="building-name" label="Nombre" defaultValue="Nombre del edificio" /> */}
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                alignItems="flex-end"
                className="element"
              >
                <Grid item>
                  <Domain />
                </Grid>
                <Grid item>
                  <TextField
                    input
                    type="date"
                    id="date"
                    name="date"
                    onChange={(e) =>
                      setSpending({
                        ...spending,
                        date: new Date(e.target.value),
                      })
                    }
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                alignItems="flex-end"
                className="element"
              >
                <Grid item>
                  <Room />
                </Grid>
                <Grid item>
                  <TextField
                    id="concepto"
                    name="concept"
                    label="Concepto"
                    defaultValue="Concepto"
                    value={spending.concept}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                alignItems="flex-end"
                className="element"
              >
                <Grid item>
                  <LocationCity />
                </Grid>
                <Grid item>
                  <TextField
                    id="proveedor"
                    label="Proveedor"
                    value={spending.supplier}
                    onChange={handleInputChange}
                    name="supplier"
                    placeholder="supplier"
                    defaultValue="Proveedor"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid
                container
                spacing={1}
                alignItems="flex-end"
                className="element"
              >
                <Grid item>
                  <Receipt />
                </Grid>
                <Grid item>
                  <TextField
                    id="detalles"
                    label="Detalles"
                    defaultValue="Detalles"
                    value={spending.details}
                    onChange={handleInputChange}
                    name="details"
                    placeholder="details"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                alignItems="flex-end"
                className="element"
              >
                <Grid item>
                  <ListAlt />
                </Grid>
                <Grid item style={{ width: "80%" }}>
                  <TextField
                    width="80%"
                    id="monto"
                    type="number"
                    label="Monto"
                    defaultValue="1"
                    value={spending.amount}
                    min="1"
                    onChange={handleInputChange}
                    name="amount"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item>
                {props.match.path === "/spendings/newSpending" ? (
                  <Link to={"./board"}>
                    <Button
                      className={classes.margin}
                      variant="contained"
                      color="secondary"
                      type="button"
                      onClick={handleAdd}
                    >
                      Agregar Gasto
                    </Button>
                    <Button
                      className={classes.margin}
                      variant="contained"
                      color="secondary"
                      type="button"
                    >
                      Cancel
                    </Button>
                    <Button
                      className={classes.margin}
                      variant="contained"
                      color="secondary"
                      type="button"
                    >
                      Ver todos los gastos
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to={"../../board"}>
                      <Button
                        className={classes.margin}
                        variant="contained"
                        color="secondary"
                        type="button"
                        style={{ fontWeight: 1000 }}
                        onClick={handleUpdate}
                      >
                        Actualizar
                      </Button>
                      <Button
                        className={classes.margin}
                        variant="contained"
                        color="secondary"
                        type="button"
                        style={{ fontWeight: 1000 }}
                      >
                        Cancel
                      </Button>
                      <Button
                        className={classes.margin}
                        variant="contained"
                        color="secondary"
                        type="button"
                        style={{ fontWeight: 1000 }}
                        onClick={handleDelete}
                      >
                        Eliminar
                      </Button>
                    </Link>
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default Form;
