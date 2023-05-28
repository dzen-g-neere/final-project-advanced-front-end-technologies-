import React, { useContext } from 'react';
import '../Styles/AreaChecker.css';

import {Button, ButtonGroup, Input} from "@mui/material";
import {Table} from "@mui/material";
import {TableCell} from "@mui/material";
import {TableHead} from "@mui/material";
import {TableRow} from "@mui/material";

import {useDispatch, useSelector} from "react-redux";
import setX from "../Actions/Callbacks/setX";
import setY from "../Actions/Callbacks/setY";
import setR from "../Actions/Callbacks/setR";
import setMessage from "../Actions/Callbacks/setMessage";
import setPoints from "../Actions/Callbacks/setPoints";
import clearPoints from "../Actions/Callbacks/clearPoints";
import signOut from "../Actions/Callbacks/signOut";
import Canvas from "./Canvas";
import downloadPoints from "../Actions/Requests/downloadPoints";
import addPoint from "../Actions/Callbacks/addPoint";

import { ThemeContext } from "../Theme/ThemeContext";
import Header from '../Theme/Header';

function AreaChecker() {
    const { theme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const X = useSelector(state => state.X);
    const Y = useSelector(state => state.Y);
    const R = useSelector(state => state.R);
    const userCredentials = useSelector(state => state.userCredentials);
    const points = useSelector(state => state.points);
    const message = useSelector(state => state.message);

    return (<div id="container">

        <div id="page" style={{ backgroundColor: theme === 'light' ? '#ffffff' : '#454545' }}>
            <Header></Header>
            <div id="content">
                <div id="canvas-div">
                    <Canvas/>
                </div>
                <div id="input-field">
                    <form>
                        <div>
                            Coordinate Х: {X}<br/>
                            <ButtonGroup variant={"outlined"}>
                                <Button onClick={() => dispatch(setX(-4))}>-4</Button>
                                <Button onClick={() => dispatch(setX(-3))}>-3</Button>
                                <Button onClick={() => dispatch(setX(-2))}>-2</Button>
                                <Button onClick={() => dispatch(setX(-1))}>-1</Button>
                                <Button onClick={() => dispatch(setX(0))}>0</Button>
                                <Button onClick={() => dispatch(setX(1))}>1</Button>
                                <Button onClick={() => dispatch(setX(2))}>2</Button>
                                <Button onClick={() => dispatch(setX(3))}>3</Button>
                                <Button onClick={() => dispatch(setX(4))}>4</Button>
                            </ButtonGroup>

                        </div>
                        <div>
                            Coordinate Y от [-3, 3]: {Y}<br/>
                            <Input id="Y" type={"number"} onChange={(val) => {
                                dispatch(setY(val.target.value));
                            }}/>
                        </div>
                        <div>
                            Radius: {R}<br/>
                            <ButtonGroup variant={"outlined"}>
                                <Button onClick={() => dispatch(setR(-4))}>-4</Button>
                                <Button onClick={() => dispatch(setR(-3))}>-3</Button>
                                <Button onClick={() => dispatch(setR(-2))}>-2</Button>
                                <Button onClick={() => dispatch(setR(-1))}>-1</Button>
                                <Button onClick={() => dispatch(setR(1))}>1</Button>
                                <Button onClick={() => dispatch(setR(2))}>2</Button>
                                <Button onClick={() => dispatch(setR(3))}>3</Button>
                                <Button onClick={() => dispatch(setR(4))}>4</Button>
                            </ButtonGroup>
                        </div>
                        {message}
                        <div><Button variant={"contained"} onClick={() => {
                            if (typeof Y === 'number' && Y <= 3 && Y >= -3) {
                                fetch('/api/points', {
                                    method: 'POST', headers: {
                                        'Content-Type': 'application/json',
                                    }, body: JSON.stringify({
                                        x: X,
                                        y: Y,
                                        r: R
                                    })
                                })
                                    .then(response => {
                                        if (response.ok) {
                                            response.json().then(point => dispatch(addPoint(point)));
                                            console.log(points);
                                            dispatch(setMessage());
                                        } else response.text().then(text => dispatch(setMessage(text)));
                                    })
                                    .catch((error) => {
                                        console.error('Error:', error);
                                    });

                            } else dispatch(setMessage("Y should be number from -3 to 3"));
                        }}>Submit</Button></div>
                    </form>
                </div>


                <div id="footer">
                    <Table id="points-table">
                        {points.map((point, i) => {
                            if (i === 0) {
                                return (<TableHead key={i}>
                                    <TableCell>{point.x}</TableCell>
                                    <TableCell>{point.y}</TableCell>
                                    <TableCell>{point.r}</TableCell>
                                    <TableCell>{point.time}</TableCell>
                                    <TableCell>{point.result}</TableCell>
                                </TableHead>)
                            }
                            return (<TableRow key={i}>
                                <TableCell>{point.x}</TableCell>
                                <TableCell>{point.y}</TableCell>
                                <TableCell>{point.r}</TableCell>
                                <TableCell>{window.innerWidth > 641 ? point.time : point.time.substring(0, 11)}</TableCell>
                                <TableCell>{point.result ? "true" : "false"}</TableCell>
                            </TableRow>)
                        })}
                    </Table>
                </div>

            </div>

        </div>

    </div>);
}

export default AreaChecker;