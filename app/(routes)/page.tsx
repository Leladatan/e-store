import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({isFeatured: true})
    const billboards = await getBillboard("89510330-865e-471a-a11c-445b66847cca");

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboards} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" products={products} />
                </div>
            </div>
        </Container>
    );
};

export default HomePage;
