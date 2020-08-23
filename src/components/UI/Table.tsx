import React from 'react';
// import { Table, Header } from 'semantic-ui-react';

interface IProps {
    title: string;
    rows: Array<any>;
    headers: Array<any>;
}

const UITable: (props: IProps) => JSX.Element = (props: IProps) => (
    <div>
        <header>{props.title}</header>
        <table>
            <thead>
                <tr>
                    {props.headers.map((header, index) => {
                        return <th key={index}>{header}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {props.rows.map((row, index) => {
                    return (
                        <tr key={index}>
                            {row.map((r: any, index: number) => {
                                return <td key={index}>{r}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
        {/* <Header inverted as="h3">
            {props.title}
        </Header> */}
        {/* <Table inverted unstackable>
            <Table.Header>
                <Table.Row>
                    {props.headers.map((header, index) => {
                        return <Table.HeaderCell key={index}>{header}</Table.HeaderCell>;
                    })}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {props.rows.map((row, index) => {
                    return (
                        <Table.Row key={index}>
                            {row.map((r: any, index: number) => {
                                return <Table.Cell key={index}>{r}</Table.Cell>;
                            })}
                        </Table.Row>
                    );
                })}
            </Table.Body>
        </Table> */}
    </div>
);

export default UITable;
