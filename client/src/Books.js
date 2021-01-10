import React from 'react';
class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            networkInterfaces: '',
            books: []
        };
    }
    componentDidMount() {
        fetch("/api/books")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        networkInterfaces: result.networkInterfaces,
                        books: result.books
                    });
                },
                (error) => {
                    this.setState({
                        networkInterfaces: '',
                        books: []
                    });
                }
            )
    }

    render() {
        const books = this.state.books;

        return (
            <div className="row">
               

                <table className="table table-hover">
                    <thead>
                      

                        {(books && books.length) ? books.map(book => (

                            <tr key={book.name}>

                                <td><img src={book.image} alt="" height="50" /></td>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                            </tr>

                        )) : ''}

                    </thead>
                    <tbody>

                    </tbody>

                </table>
                <p>{JSON.stringify(this.state.networkInterfaces)}</p>

            </div>

        );

    }
}
export default Books;