import pandas as pd
import numpy as np
import requests
from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import time

def get_data():
    page = driver.page_source
    soup = BeautifulSoup(page, "html.parser")
    # 開啟時刻表
    driver.find_element_by_css_selector("div.leaflet-control div.MuiBox-root:nth-child(2) button").click()
    time.sleep(1)

    # 起站 & 訖站欄位
    from_station = soup.select("h3.MuiTypography-h3")[0].text
    to_station = soup.select("h3.MuiTypography-h3")[1].text

    from_stations.append(from_station)
    to_stations.append(to_station)
    time.sleep(0.5)

    # 去程時刻表
    to_div = soup.select("div.MuiGrid-grid-xs-12:nth-child(2) div.MuiGrid-grid-xs-12:nth-child(1)")
    temp_to_div = []
    for i in to_div[0].select("span.MuiTypography-root"):
        temp_to_div.append(i.text)
    to_time = "、".join(temp_to_div)
    to_times.append(to_time)
    time.sleep(0.5)

    # 回程時刻表
    back_div = soup.select("div.MuiGrid-grid-xs-12:nth-child(2) div.MuiGrid-grid-xs-12:nth-child(2)")
    temp_back_div = []
    for i in back_div[0].select("span.MuiTypography-root"):
        temp_back_div.append(i.text)
    back_time = "、".join(temp_back_div)
    back_times.append(back_time)

def crawler_procedure(step):
    # 展開(返回)表單
    driver.find_element_by_css_selector("div.jss98>button.MuiButtonBase-root").click()

    # 進入單一路線
    # driver.find_element_by_css_selector("input.MuiInputBase-input").click() # 選取表單
    q = driver.find_element_by_css_selector("input.MuiInputBase-input")
    time.sleep(0.5)
    # q.send_keys(Keys.CONTROL, "a") # 全選清除
    # time.sleep(0.5)
    # q.send_keys(num)
    # driver.find_element_by_css_selector("span.MuiListItemText-primary:nth-child(1)").click()
    if step == 1:
        q.send_keys(Keys.ENTER)
    else:
        q.send_keys(Keys.DOWN)
        q.send_keys(Keys.ENTER)
    time.sleep(1)

    # 起訖站欄位
    import re
    page = driver.page_source
    soup = BeautifulSoup(page, "html.parser")

    from_to_station = soup.select("span.MuiButton-label")
    temp_str = from_to_station[12].text
    temp_str = re.sub("\▾", "", temp_str) # re 正則取代寫法 re.sub("被取代", "取代為", "輸入字串")
    from_to_stations.append(temp_str)
    time.sleep(0.5)
 
    multi_routes = driver.find_elements_by_xpath("//*[contains(text(), '%s')]"%(temp_str))
    if len(multi_routes) > 1:
        for route in multi_routes[3:-1]:
            route.click()
            get_data()
    else:
        get_data()


## 主程式
from_to_stations = []
from_stations = []
to_times = []
to_stations = []
back_times = []

# 蒐集尋找路線
# much = int(input("* 抓取路線數："))
# num_list = []
# for num in range(much):
#     num_list.append(input("* 第%i/%i："%(num+1, much)))
# print(num_list)

# 進入網頁
driver = webdriver.Chrome("D:\Python training\chromedriver.exe")
driver.get("https://citybus.taichung.gov.tw/ebus/driving-map")
time.sleep(1)

# 蒐集資料 loop
# for num in num_list:
step = 1
for _ in range(1000):
    # try:
        crawler_procedure(step=step)
        if from_to_stations[-1] == from_to_stations[0] and step != 1:
            break
        else:
            pass
        step += 1
        time.sleep(1)
    # except:
        # break
driver.close()

# print(from_to_stations, from_stations, to_times, to_stations, back_times, sep="\n")
df_cols = ["路線", "起站", "起站時刻", "迄站", "迄站時刻"]
df = pd.DataFrame(dict(zip(df_cols, [from_to_stations, from_stations, to_times, to_stations, back_times])))
print(df)
df.to_csv("./taichung-bus.csv", encoding="utf-8", index=False)
