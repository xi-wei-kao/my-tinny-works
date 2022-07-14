print("hellow 每日價量\n", "==="*30)
from datetime import time, date, datetime, timedelta
from os import error, write
from re import X, findall
import re
from matplotlib.pyplot import colorbar, plot, xlabel, xscale, xticks, ylabel
from numpy.core.defchararray import index, replace, strip
from numpy.core.fromnumeric import ptp
from numpy.lib.function_base import quantile
from pandas.core.tools.numeric import to_numeric
from pandas.io.parsers import read_csv
import requests
import pandas as pd
import numpy as np
from bs4 import BeautifulSoup
import time
start = time.time()
def catch_2609():
    url = "https://pchome.megatime.com.tw/stock/sto0/ock3/sid2609.html"
    post_req = {"is_check": "1"}
    data = requests.post(url, data=post_req)
    # post 請求存取方法(doc) 參考資料:https://www.youtube.com/watch?v=Ef0kh6NPiBE
    # print(data.text)
    soup_data = BeautifulSoup(data.text, "html.parser")
    table = soup_data.select("table #tb_chart tr td")
    data = []
    for i in table:
        data.append(i.text)
    # print(data)
    data = np.array(data)
    print(data.shape)
    data = data.reshape(int(data.size/7), 7)
    title = data[0,:]
    # print(title)
    cells = data[1:,:]
    # print(cells)
    df = pd.DataFrame(cells, columns=title)
    print(df)
    today = datetime.today()
    year = today.strftime("%Y")
    month = today.strftime("%m")
    day = today.strftime("%d")
    df.to_csv("./2609data/%s-%s-%s陽明(2609)價量資料.csv"%(year, month, day)
    , index=False, sep=",")
# catch_2609() # 成功, 且匯出 csv 檔～
# print(today.year, today.month, today.day, today.hour, today.minute, today.second, sep=",")
#     ps: ↖ python 的時間格式: datetime 模組
# ============================================================================================ #
# ======================= function-definition =============================== #
def get_num_list(): # function-1: 整理個股代號的輸入串列
    with open("stock-list.csv", mode="r+", encoding="utf-8") as file:
        all_list = []
        for line in file:
            line = line.replace("?", "")
            for i in line.split(","):
                all_list.append(i)
                count = 0
    while count < len(all_list):
        if all_list[count].isdigit():
            pass
        else:
            all_list[count] = "nan"
        count = count + 1
    for i in range(2000):
        try:
            all_list.remove("nan")
        except:
            break
    return all_list # 整個串列清理乾淨
def find_catch_list(): # function-2: 搜尋符合資格之個股串列
    num_list = []
    all_list = get_num_list()
    post_req = {"is_check": "1"}
    step = 1
    for num in all_list:
        url = "https://pchome.megatime.com.tw/stock/sto0/ock2/sid%s.html"%(num)
        page = requests.post(url, data=post_req)
        # print("* 狀態碼(200為成功):", page.status_code)
        html = page.text
        soup = BeautifulSoup(html, "html.parser")
        table = soup.select("table.sdt-col-10")
        if len(table) >= 1:
            day_vol = table[0].select("tr:nth-child(1) td:nth-child(2)")
            try:
                day_vol = day_vol[0].text.split(",")
                day_vol = int("".join(day_vol)) # 今日量
                ref_pr = table[0].select("td:nth-last-child(1)")
                ref_pr = round(float(ref_pr[0].text), 2)
                # print("* 當天成交量: %s\n* 昨日參考價: %s"%(day_vol, ref_pr))
                if (day_vol > 10000)*(ref_pr < 50):
                    num_list.append(num)
                    print("# 搜尋至第 %s / 共 %s 筆, 將 %s 加入至清單~"%(step, len(all_list)+1, num))
                    check = time.time() - start
                    print("/ 已執行: 「%s」秒 /"%(check))
                else:
                    pass
            except:
                pass
        else:
            pass
        step = step + 1
    return num_list
def catch_price_volumn(num, delay): # main-function: 改寫成有股票編號就能抓的函式
    url = "https://pchome.megatime.com.tw/stock/sto0/ock3/sid%s.html"%(num)
    post_req = {"is_check": "1"}
    data = requests.post(url, data=post_req)
    # post 請求存取方法(doc) 參考資料:https://www.youtube.com/watch?v=Ef0kh6NPiBE
    # print(data.text)
    soup_data = BeautifulSoup(data.text, "html.parser")
    table = soup_data.select("table #tb_chart tr td")
    data = []
    for i in table:
        data.append(i.text)
    # print(data)
    data = np.array(data)
    print(data.shape)
    data = data.reshape(int(data.size/7), 7)
    title = data[0,:]
    # print(title)
    cells = data[1:,:]
    # print(cells)
    df = pd.DataFrame(cells, columns=title)

    today = datetime.today()
    dif = timedelta(days=delay)
    today = today - dif   # 68~69 如果假日才抓, 要昨天的日期
    year = today.strftime("%Y")
    month = today.strftime("%m")
    day = today.strftime("%d")
    df["日期"] = year + month + day
    print(df)
    
    df["成交價"] = df["成交價"].astype("float")
    df["漲跌"] = df["漲跌"].astype("float")
    table_size = df.size
    today_open = df.iloc[int(df.size/8)-1,3]
    today_first_change = df.iloc[int(df.size/8)-1,4]
    today_ref_pr = today_open - today_first_change # 推算前天收盤價
    import os
    try:
        os.mkdir("./%sdata"%(num)) # 建立資料夾
    except:
        None
    finally:
        df.to_csv("./%sdata/%s-%s-%s.%s價量資料.csv"%(num, year , month, day, num)
        , index=False, sep=",")
    
    # ↑爬蟲&存檔；畫圖↓
    time.sleep(1)
    import matplotlib.pyplot as plt
    import seaborn as sns
    plt.rcParams['font.sans-serif'] = ['Microsoft JhengHei'] 
    plt.rcParams['axes.unicode_minus'] = False  # 顯示中文
    df["分量(張)"] = pd.to_numeric(df["分量(張)"])
    group = df.groupby(["成交價"])
    total_vol = df["分量(張)"].sum()
    condition = (df["分量(張)"] > df["分量(張)"].quantile(q=0.8)) & (df.index != 0) & (df.index != 1) & (df.index != df.index.max())
    df = df[condition]
    df.reset_index(inplace=True)
    # df = df.sort_index(ascending=False)
    print(df)
    print("* %s今日總量 & 前20%大單總量 & 占比：", total_vol, "%", df["分量(張)"].sum(), "&", round(df["分量(張)"].sum()/total_vol, 2))
    # info = "%s - 「今日總量」「前20%大單總量」「占比」：「%s」「%s」「%s」"%(num, total_vol, df["分量(張)"].sum(), round(df["分量(張)"].sum()/total_vol, 2))
    # show.append(info)
    print("* 已創建今日價量資料至此路徑的%s資料夾中！"%(num))
    print("* 表格大小：\n", table_size)
    print("* 今日參考價：\n", today_ref_pr)
    print("* 今日跌/漲參考價：\n", round(today_ref_pr*0.9, 2), round(today_ref_pr*1.1, 2))

    tot = int(len(df["分量(張)"]))
    apart = int((len(df["分量(張)"])/3))
    plt.subplot(2,3,3).plot(-1*df.index[0:apart], df["分量(張)"][0:apart], color="b")
    plt.ylim(0, 520)
    plt.grid()
    plt.subplot(2,3,2).plot(-1*df.index[apart:tot-apart], df["分量(張)"][apart:tot-apart], color="b")
    title1 = num + "前 20% 大單[不算第一 & 最後搓]: 單量柱狀圖"
    plt.title(title1)
    plt.grid()
    plt.ylim(0, 520)
    plt.subplot(2,3,1).plot(-1*df.index[tot-apart:], df["分量(張)"][tot-apart:], color="b")
    plt.grid()
    plt.ylim(0, 520)

    df["成交價"] = df["成交價"].astype("float") # astype → numpy 的陣列方法
    plt.subplot(2,3,6).plot(-1*df.index[0:apart], df["成交價"][0:apart], color="r")
    plt.ylim(today_open*0.9, today_open*1.1)
    plt.grid()
    plt.subplot(2,3,5).plot(-1*df.index[apart:tot-apart], df["成交價"][apart:tot-apart], color="r")
    title2 = num + "前 20% 大單[不算第一 & 最後搓]: 價格折線圖"
    plt.title(title2)
    plt.ylim(today_open*0.9, today_open*1.1)
    plt.grid()
    plt.subplot(2,3,4).plot(-1*df.index[tot-apart:], df["成交價"][tot-apart:], color="r")
    plt.ylim(today_open*0.9, today_open*1.1)
    plt.grid()
    plt.subplots_adjust(left=0.125, bottom=0.1, right=0.9, top=0.9, wspace=0.35, hspace=0.35)
    plt.savefig("./%sdata/%s-%s-%s.%s大單進出圖.png"%(num, year ,month ,day ,num ), dpi=300, format="png")
    # plt.show()    # 連續抓就別看, 要看在拿掉註解！
    return None

# ======================= global-operation =============================== #
num_list = []
temp = 1
delay = int(input("* 抓幾天前資料?(當天為「0」): "))
which = input("* 今日價量明細, 要怎麼抓？(1=自動找符合價90/量10000、2=半自動抓 given-tuple、3=手動彈性打)：", )
print("* 請稍後, 搜尋今日符合價50以下/量10,000之標的清單...")
if which== "1":
    num_list = find_catch_list()
elif which == "2":
    num_list = (
        "2303", "2330", "2409", "2603", "2609",
        "2615", "3019", "3035", "3037", "3042",
        "3545", "3707", "4919", "6104", "6411",
        )
elif which == "3":
    many = input("* 輸入幾支股票？:")
    while int(temp) <= int(many):
        num_list.append(input("* 輸入股票編號(%s/%s)："%(temp, many)))
        temp = temp + 1
else:
    print("<！>輸入錯誤, 重試～")
temp = 1
show = []
for num in num_list:
    print("* 請稍後「%s」的資料, 第%s/%s個..."%(num, temp, int(len(num_list))))
    df = catch_price_volumn(num = num, delay = delay) # 成功, 且創建資料夾 & 匯出 csv 檔～
    temp = temp + 1
today = datetime.today()
year = today.year
month = today.month
day = today - timedelta(days=delay)
import csv
if which == "1":
    with open("day-trading.csv", mode="a", encoding="utf-8") as file:
        writer = csv.writer(file)
        file.write("{"+"%s/%s/%s(價90/量10,000):\n\t"%(year, month, day))
        writer.writerow(num_list)
        file.write("}"+"\n")
    print("%s/%s/%s的爬取清單已寫入「day-trading.csv」中:"%(year, month, day))
# for i in show:
#     print(i)
end = time.time()
period = end - start
print("* 一共執行: 「%s」秒"%(period))
# ======================= end =============================== #

# # # ## ↓ 未來要分析資料時, 處理時間 & 日期的時間變數時可以參考的 code ~ 
# # # # df["時間"] = pd.to_datetime(df["時間"])
# # # # df["日期"] = pd.to_datetime(df["日期"])
# # # # print(df.dtypes)
# # # # print(df["時間"][12].second)
# # # # print(df["日期"][12].day)
# from numpy.core.defchararray import isdecimal, istitle, lstrip
# from requests import api



# ↘彭彭: 裝飾器練習
# def decorator(callback):
#     def sub(): # 定義副程式
#         print("(第一步): 先執行副程式的內容")
#         callback(3) # 呼叫主程式, 能把副程式執行得到的資料傳給主程式參數使用
#         # → 裝飾器的好處: 
#         #   1. 輕鬆在回呼這裡填入要給主程式的資料 & 
#         #   2. 把主程式定義在副程式底下(要在主程式呼叫寫結構[例如上一行寫成for迴圈]不影響到副程式)
#     return sub

# @decorator
# def main(n): # 定義主程式
#     print("(第二步): 再執行主程式的內容")
#     print("印出參數:", n)
# main()