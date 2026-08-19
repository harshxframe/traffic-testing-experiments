import http.client
import time



carNumber = str(input("Enter car number: "))
print("Loading.. Main Program")
time.sleep(2)
print("Making request to RTO..")
time.sleep(3)
print("processing...\n")

conn = http.client.HTTPSConnection("vehicle-details-pro.p.rapidapi.com")

headers = {
    'x-rapidapi-key': "3d826799camsh3614fb4fafae1a8p10c380jsnf00b30c11cf6",
    'x-rapidapi-host': "vehicle-details-pro.p.rapidapi.com",
    'Content-Type': "application/json"
}

conn.request("GET", f"/?reg_number={carNumber}", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))




