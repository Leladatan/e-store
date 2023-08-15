import Container from "@/components/ui/container";
import getProducts from "@/actions/getProducts";
import ProductList from "@/components/product-list";
import getBillboards from "@/actions/getBillboards";
import BillboardSlider from "@/components/billboard-slider";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({isFeatured: true});
    const billboards = await getBillboards();

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <BillboardSlider data={billboards} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" products={products} />
                </div>
            </div>
        </Container>
    );
};

export default HomePage;
