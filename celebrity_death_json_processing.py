import json
import pandas as pd

df = pd.read_csv("celebrity_deaths_4.csv", encoding="ISO-8859-1")

df.info()
df.dropna(inplace=True)
df['age'] = df['age'].astype(object)
df['birth_year'] = df['birth_year'] = df['birth_year'].astype(object)
df['death_year'] = df['death_year'] = df['death_year'].astype(object)
df['fame_score'] = df['fame_score'].astype(object)
df.info()

final_vals = []

for i in list(df.index):
    series_dict = df.loc[i].to_dict()
    final_vals.append(series_dict)

with open("celebrity_deaths.json", "w") as my_file:
    json.dump(final_vals, my_file)
