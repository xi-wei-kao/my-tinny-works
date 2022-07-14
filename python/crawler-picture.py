print("hellow my image identification dataset!\n", "==="*20)
import pandas as pd
import numpy as np
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys
import lxml
import os
from PIL import Image

start = time.time()
def crawler_picture(user_in):
    # 開始
    driver = webdriver.Chrome("D:\Python training\chromedriver.exe")
    driver.get("https://pic.sogou.com/")

    time.sleep(1)
    # 搜尋
    driver.find_element_by_css_selector("input.query-defalut").click()
    driver.find_element_by_css_selector("input.query-defalut").clear()
    q = driver.find_element_by_css_selector("input.query-defalut")
    q.send_keys(user_in)
    q.send_keys(Keys.ENTER) # Keys.RETURN | Keys.ENTER 效果差不多

    # 滾動網頁(預設滾100次, 就不信還不到底部)
    for i in range(100): # 滾動讀取網頁
        js2 = "window.scrollTo(0, window.document.body.scrollHeight)" # 滾到底部
        driver.execute_script(js2)
        time.sleep(0.5)

    # 分析 html
    html = driver.page_source
    soup = BeautifulSoup(html, "html.parser")

    # 開始爬蟲
    images = soup.find_all(name="img", attrs={"lazy":"loaded"})
    print("「提示(抓取圖片數量)：」", len(images)+1)
    for index, image in enumerate(images):
        # print(index, "|\n", image.get("src"))
        image_link = image.get("src")
        image_bcord = requests.get(image_link)
        if not os.path.exists("./%s-folder"%(user_in)):
            os.mkdir("./%s-folder"%(user_in))
        else:
            pass
        with open("./%s-folder/%s%i"%(user_in, user_in,  index+1)+".jpg", mode="wb") as file:
            file.write(image_bcord.content)
        time.sleep(0.5)
        # 每100張提示訊息
        if index % 100 == 0:
            time_check = time.time()
            print("「提示：(爬取第%i張/共%i張)」\n"%(index+1, len(images)+1),\
                "="*10, "執行時間%.1f"%(time_check-start), "="*10)
        time.sleep(1)
        # break # 第一張成功
    driver.close()
def picture_post_treat(user_in):
    # 將圖片resize為(width,height) 給模型學習用
    for index in range(1000):
        try:
            img = Image.open("./%s-folder/%s%i.jpg"%(user_in, user_in,  index+1))
            new_img = img.resize((200,200))
            new_img.save("./%s-folder/data/%s%s.png"%(user_in, user_in, index+1))
            time.sleep(0.5)
            print("%i圖片"%(index+1))
        except:
            pass
user_in = input("* 請輸入要爬取圖片之關鍵字(如suv):")
# crawler_picture(user_in)
picture_post_treat(user_in)
end = time.time() - start
print("\n~~~結束時間:%.1f秒~~~"%(end))