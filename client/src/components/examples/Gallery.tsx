import Gallery from '../Gallery';
import img1 from "@assets/stock_images/modern_office_worksp_81b24f9a.jpg";
import img2 from "@assets/stock_images/modern_office_worksp_940af8c1.jpg";
import img3 from "@assets/stock_images/modern_office_worksp_9afc6062.jpg";
import img4 from "@assets/stock_images/minimalist_design_pa_4fb5d121.jpg";
import img5 from "@assets/stock_images/minimalist_design_pa_fdee3ace.jpg";
import img6 from "@assets/stock_images/minimalist_design_pa_07e4b51f.jpg";
import img7 from "@assets/stock_images/modern_tech_product__a2fc052a.jpg";
import img8 from "@assets/stock_images/modern_tech_product__ef30447c.jpg";
import img9 from "@assets/stock_images/modern_tech_product__62b9be48.jpg";
import img10 from "@assets/stock_images/creative_workspace_m_37dea2e7.jpg";
import img11 from "@assets/stock_images/creative_workspace_m_70436db7.jpg";

const galleryItems = [
  { id: 1, src: img1, alt: "Modern Workspace Design", span: "col-span-2 row-span-2" },
  { id: 2, src: img2, alt: "Tech Innovation Hub", span: "col-span-1 row-span-1" },
  { id: 3, src: img3, alt: "Collaborative Space", span: "col-span-1 row-span-1" },
  { id: 4, src: img4, alt: "Minimalist Patterns", span: "col-span-1 row-span-2" },
  { id: 5, src: img5, alt: "Geometric Design", span: "col-span-1 row-span-1" },
  { id: 6, src: img6, alt: "Abstract Forms", span: "col-span-2 row-span-1" },
  { id: 7, src: img7, alt: "Product Showcase", span: "col-span-1 row-span-1" },
  { id: 8, src: img8, alt: "Tech Display", span: "col-span-1 row-span-2" },
  { id: 9, src: img9, alt: "Modern Device", span: "col-span-1 row-span-1" },
  { id: 10, src: img10, alt: "Creative Studio", span: "col-span-1 row-span-1" },
  { id: 11, src: img11, alt: "Workspace Aesthetic", span: "col-span-1 row-span-1" },
];

export default function GalleryExample() {
  return <Gallery items={galleryItems} />;
}
