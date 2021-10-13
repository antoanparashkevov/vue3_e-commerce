<?php

namespace App\Controller;


use ApiPlatform\Core\Api\IriConverterInterface;
use ApiPlatform\Core\Bridge\Symfony\Routing\IriConverter;
use App\Entity\Category;
use App\Entity\Product;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class ProductController extends AbstractController
{
    /**
     * @Route("/", name="app_homepage")
     */
    public function index(CategoryRepository $categoryRepository): Response
    {
        return $this->render('product/index.html.twig',[
//            that will query all categories
//        now we have categories variable available in our twig file
            'categories' => $categoryRepository->findAll()
        ]);
    }

    /**
     * @Route("/category/{id}", name="app_category")
     */

//    @id is known as IRI. This is a string who show the URL for the specific product in database.
//      This is different between the id property who is integer and created by us.
    public function showCategory(
        Category $category,
        IriConverterInterface $iriConverter,
        CategoryRepository $categoryRepository
    ): Response
    {
        return $this->render('product/index.html.twig',[

            'currentCategoryId' => $iriConverter->getIriFromItem($category),

            'categories' => $categoryRepository->findAll()
        ]);
    }

    /**
     * @Route("/product/{id}", name="app_product")
     */
    public function showProduct(Product $product): Response
    {
        return $this->render('product/index.html.twig');
    }
}
