# Generating PDF Files with Node.js and Puppeteer

### Warning
> The old Headless mode in Puppeteer is deprecated and will be removed in a future version. You should upgrade to the new Headless mode, which is more efficient and provides better performance. To upgrade, pass the `headless: "new"` option to the `puppeteer.launch()` function. If you encounter any bugs with the new Headless mode, please report them to the Puppeteer issue tracker.

This code generates a PDF file of exported data from an html.

The code uses the Puppeteer library to launch a browser, create a new page, and set the viewport. The page is then populated with the HTML content from the `pageFirstHalf` variable. The data is then looped over and each item is added to a table row. The table rows are then joined together and added to the `pageSecondHalf` variable. The final step is to call the `GeneratePdf` function, which generates a PDF file of the HTML content.

## How to Use

To use this code, you will need to have the following installed:

- Node.js
- Puppeteer

Once you have installed the required dependencies, you can run the code by following these steps:

1. Clone the repository.
2. In the project directory, run the following command:

```
pnpm install
```

3. Run the following command to generate the PDF file:

```
node index.js
```

The PDF file will be created in /export folder under the project directory.

## Example

The following is an example of the output of the code:

| Product Name | Quantity | Price | Total | Date       | Balance | Code      | Comment                                        |
| ------------ | -------- | ----- | ----- | ---------- | ------- | --------- | ---------------------------------------------- |
| Chair        | 12       | 2000  | 24000 | 2023-05-15 | 28      | Australia | asdasdas dad dasdasda                          |
| Table        | 10       | 4000  | 40000 | 2023-05-14 | 5       | Australia | table to saron                                 |
| Chair        | 10       | 3000  | 30000 | 2023-05-17 | 28      | Australia | This the chair sold by 3000                    |
| TV           | 1        | 50000 | 50000 | 2023-05-08 | 1       | sony      | This tv is sold by 30000 and transfed to sofia |




## contributors 

I hope you find it useful. I've built it to be as flexible as possible so that you can enhance it to meet your specific needs.

Here are a few ideas for how you can enhance the code:

- Add more features
- Improve the performance
- Fix any bugs
- Make it more user-friendly

I'm always open to feedback, so please feel free to reach out if you have any suggestions.

Thanks, THEO
