const request = require("request-promise")
const puppeteer = require('puppeteer');
const cheerio = require("cheerio")
const fs = require("fs")
const json2csv = require("json2csv").Parser;


const url = "https://www.j-archive.com/showgame.php?game_id=7053";

//use puppeteer for scraping clues
(async () => {
    //launch pupeteer
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized']
    })
    const page = await browser.newPage()
    await page.goto(url)

    //get game date

    const date = await page.evaluate(() => 
        Array.from(
            document.querySelectorAll('div[id="game_title"] h1'),
            (element) => element.textContent
        )
    ) 
    console.log(date)

    //get jeopardy round categories by selector
    const categories = await page.evaluate(() => 
        Array.from(
            document.querySelectorAll('div[id="jeopardy_round"] td[class="category_name'),
            (element) => element.textContent
        )
    )
    
    //get jeopardy round clues by selector
    const clues = await page.evaluate(() =>
        Array.from(
            document.querySelectorAll('div[id="jeopardy_round"] td[class="clue_text"]'),
            (element) => element.outerHTML
        )
    )

    //get double jeopardy round categories by selector
    const doubleCategories = await page.evaluate(() => 
        Array.from(
            document.querySelectorAll('div[id="double_jeopardy_round"] td[class="category_name'),
            (element) => element.textContent
        )
    )

    //get double jeopardy round clues by selector
    const doubleClues = await page.evaluate(() =>
        Array.from(
            document.querySelectorAll('div[id="double_jeopardy_round"] td[class="clue_text"]'),
            (element) => element.outerHTML
        )
    )

    //get final jeopardy round category by selector
    const finalCategory = await page.evaluate(() =>
        Array.from(
            document.querySelectorAll('div[id="final_jeopardy_round"] td[class="category_name"]'),
            (element) => element.textContent
        )
    )

    //get final jeopardy round clue by selector
    const finalClue = await page.evaluate(() => 
        Array.from(
            document.querySelectorAll('div[id="final_jeopardy_round"] td[class="clue_text"]'),
            (element) => element.textContent
        )
    )

    //click on clues values in order to reveal answers
    const clicks = await page.$$('div[id="jeopardy_round"] table[class="clue_header"]');
    for (var i = 0; i < clicks.length; i++){
        await clicks[i].click();
    }

    const doubleClicks = await page.$$('div[id="double_jeopardy_round"] table[class="clue_header"]');
    for (var i = 0; i < doubleClicks.length; i++){
        await doubleClicks[i].click();
    }

    const finalClick = await page.$('div[id="final_jeopardy_round"] td[class="category_name"]');
    await finalClick.click()

    //get jeopardy round answers by selector
    const answers = await page.evaluate(() =>
        Array.from(
            document.querySelectorAll('div[id="jeopardy_round"] em[class="correct_response"]'),
            (element) => element.textContent
        )
    )

    //get double jeopardy round answers by selector
    const doubleAnswers = await page.evaluate(() =>
        Array.from(
            document.querySelectorAll('div[id="double_jeopardy_round"] em[class="correct_response"]'),
            (element) => element.textContent
        )
    )

    //get final jeopardy round answer by selector
    const finalAnswer = await page.evaluate(() =>
        Array.from(
            document.querySelectorAll('div[id="final_jeopardy_round"] em[class="correct_response"]'),
            (element) => element.textContent
        )
    )
    
    let gameData = {
        categories: categories,
        clues: clues,
        answers: answers,
        doubleCategories: doubleCategories,
        doubleClues: doubleClues,
        doubleAnswers: doubleAnswers,
        finalCategory: finalCategory,
        finalClue: finalClue,
        finalAnswer: finalAnswer,
        date: date
    };

    const jsonFile = JSON.stringify(gameData);
    fs.writeFile("game.json",jsonFile, function(err){
        if(err){
            console.log(err)
        }
    });

    //close puppeteer browser
    await browser.close()
})()




        

