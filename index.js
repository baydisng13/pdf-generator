const puppeteer = require('puppeteer');
const fs = require('fs');

// This come from the api
const data = [
  {
    "id": "5bc8b195-e457-4022-911e-0dd49a3afa8c",
    "quantity": 12,
    "date": "2023-05-15",
    "comment": "asdasdas dad dasdasda",
    "createdAt": "2023-05-17T12:38:39.000Z",
    "updatedAt": "2023-05-17T12:38:39.000Z",
    "productId": "2e3bf38c-4ea6-4d7b-a633-72ed850395ef",
    "product": {
      "id": "2e3bf38c-4ea6-4d7b-a633-72ed850395ef",
      "name": "Chair",
      "frameMaterieal": "wood",
      "categoryName": "Product Two",
      "color": "Black",
      "size": "20*40",
      "price": 2000,
      "quantity": 28,
      "modelNo": "Australia",
      "createdAt": "2023-05-17T12:21:19.000Z",
      "updatedAt": "2023-05-17T12:38:39.000Z",
      "ProductImages": ""
    }
  },
  {
    "id": "fa19bee0-0926-4a4c-b1e6-5a9a5191f807",
    "quantity": 10,
    "date": "2023-05-14",
    "comment": "table to saron",
    "createdAt": "2023-05-17T12:37:08.000Z",
    "updatedAt": "2023-05-17T12:37:08.000Z",
    "productId": "e9eee538-8425-455c-9b6b-a55d3777152d",
    "product": {
      "id": "e9eee538-8425-455c-9b6b-a55d3777152d",
      "name": "Table",
      "frameMaterieal": "wood",
      "categoryName": "product one",
      "color": "White",
      "size": "30*40",
      "price": 4000,
      "quantity": 5,
      "modelNo": "Australia",
      "createdAt": "2023-05-17T12:20:32.000Z",
      "updatedAt": "2023-05-17T12:37:06.000Z",
      "ProductImages": "[Array]"
    }
  },
  {
    "id": "7be6bf95-fb41-47ad-9720-571f0b393d14",
    "quantity": 10,
    "date": "2023-05-17",
    "comment": "This the chair sold by 3000 ",
    "createdAt": "2023-05-17T12:36:42.000Z",
    "updatedAt": "2023-05-17T12:36:42.000Z",
    "productId": "2e3bf38c-4ea6-4d7b-a633-72ed850395ef",
    "product": {
      "id": "2e3bf38c-4ea6-4d7b-a633-72ed850395ef",
      "name": "Chair",
      "frameMaterieal": "wood",
      "categoryName": "Product Two",
      "color": "Black",
      "size": "20*40",
      "price": 2000,
      "quantity": 28,
      "modelNo": "Australia",
      "createdAt": "2023-05-17T12:21:19.000Z",
      "updatedAt": "2023-05-17T12:38:39.000Z",
      "ProductImages": "[Array]"
    }
  },
  {
    "id": "3c4f6c0d-fa25-453b-ad8b-c640f547b6b2",
    "quantity": 1,
    "date": "2023-05-08",
    "comment": "This tv is sold by 30000 and transfed to sofia",
    "createdAt": "2023-05-17T12:36:11.000Z",
    "updatedAt": "2023-05-17T12:36:11.000Z",
    "productId": "7373c88c-67e0-4ad4-a840-d9a112beccb4",
    "product": {
      "id": "7373c88c-67e0-4ad4-a840-d9a112beccb4",
      "name": "TV",
      "frameMaterieal": "Electronics",
      "categoryName": "Product Two",
      "color": "Blue",
      "size": "55",
      "price": 50000,
      "quantity": 1,
      "modelNo": "sony",
      "createdAt": "2023-05-17T12:22:06.000Z",
      "updatedAt": "2023-05-17T12:36:08.000Z",
      "ProductImages": "[Array]"
    }
  }
]


async function GeneratePdf (html) {
  // Launch the browser.
  const browser = await puppeteer.launch();

  // Create a new page.
  const page = await browser.newPage();
  await page.setViewport({
    width: 3508,
    height: 2480,
    deviceScaleFactor: 1,
  });
  await page.setContent(html);


  
  const generatedName   = new Date().toLocaleString("en-us",{year: "numeric",month: "long",day: "numeric",second:'numeric'})
  const folder_path = `./export/${generatedName}`  
  const fileName = `report.pdf`;

  // check if the folder exist 
  if (!fs.existsSync(folder_path)) {
    fs.mkdirSync(folder_path, { recursive: true });
  }

  // Save the HTML content as a PDF file.
  await page.pdf({ path: folder_path + "/" + fileName });

  // Close the browser.
  await browser.close();

  return (folder_path + "/" + fileName)
}




const pageFirstHalf = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>Document</title>
</head>
<body class="py-[80px] px-[30px]" >
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Exported data</h1>
        <p class="mt-2 text-sm text-gray-700">From : 02/23/2020</p>
        <p class="mt-2 text-sm text-gray-700">To : 02/23/2020</p>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-2 pl-2 pr-3 text-left text-xs font-semibold text-gray-900 sm:pl-6">Name</th>
                  <th scope="col" class="px-2 py-2 text-left text-xs font-semibold text-gray-900">Quantity</th>
                  <th scope="col" class="px-2 py-2 text-left text-xs font-semibold text-gray-900">Price</th>
                  <th scope="col" class="px-2 py-2 text-left text-xs font-semibold text-gray-900">Total</th>
                  <th scope="col" class="px-2 py-2 text-left text-xs font-semibold text-gray-900">Date</th>
                  <th scope="col" class="px-2 py-2 text-left text-xs font-semibold text-gray-900">Balance</th>
                  <th scope="col" class="px-2 py-2 text-left text-xs font-semibold text-gray-900">Code</th>
                  <th scope="col" class="py-2 pl-2 text-left text-xs font-semibold text-gray-900 sm:pl-6">Comment</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
`
const rows = []

data.map((item)=>{
  const row = `
  <tr>
  <td class="py-2 pl-2 pr-3 text-xs text-gray-900 sm:pl-6">${item.product.name}</td>
  <td class="px-2 py-2 text-xs text-gray-500">${item.quantity}</td>
  <td class="px-2 py-2 text-xs text-gray-500">${item.product.price}</td>
  <td class="px-2 py-2 text-xs text-gray-500">${item.product.price}</td>
  <td class="px-2 py-2 text-xs text-gray-500">${new Date(item.date).toLocaleString("en-us", {
    year: "numeric",
  month: "long",
  day: "numeric",
  })} </td>
  <td class="px-2 py-2 text-xs text-gray-500">${item.product.quantity}</td>
  <td class="px-2 py-2 text-xs text-gray-500">${item.product.color} / ${item.product.modelNo}</td>
  <td class="py-2 pl-2 text-xs text-gray-900 ">${item.comment}</td>
  </tr>
  `
  rows.push(row)
})

const pageSecondHalf = `
</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`




const page = pageFirstHalf + rows.join(`\n`) + pageSecondHalf

GeneratePdf(page)