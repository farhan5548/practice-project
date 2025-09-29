const products = [
    { id: 1, title: "Apple", isFruit: true },
    { id: 2, title: "Mango", isFruit: true },
    { id: 3, title: "Potato", isFruit: false },
    { id: 4, title: "Toamato", isFruit: false },
    { id: 5, title: "Orange", isFruit: true },
    { id: 6, title: "Carrot", isFruit: false },
];

function List() {
    const listitems = products.map(product =>
        <li
            key={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    );
    return (
        <ul className="font-bold border-8  rounded-3xl bg-white p-3 border-black text-center mx-[30rem]">{listitems}</ul>
    );
}
export default List