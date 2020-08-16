#Aug 16, 2020
#Olina Liang
#This file plot keys from table with selected keywords(in variable MEDS)
#To run: take 2017 as exanmple, put table in 2017/2017.csv, run "python plot_keys.py 2017" in terminal


import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import sys
YEAR = sys.argv[1]
MEDS = ['Methadone', 'Buprenorphine', 'Naltrexone']


#import files
df = pd.read_csv('{0}/{0}_c.csv'.format(YEAR))
keys_dict = np.load('{}/keys.npy'.format(YEAR),allow_pickle='TRUE').item()


#get info
print('\n')
print('Total number of treatment units in {} directory:'.format(YEAR), len(df))


#count keys
def has_key(key, row):
    if type(row.Keys) == str:
        return key in row['Keys'].split('/')
    return False

def count_keys(key):
    df[key] = df.apply(lambda row: has_key(key, row), axis = 1)
    return len(df[df[key] == True])

def clean_key(keys, counts):
    '''
    Returns keys and counts without the zero terms.
    '''
    keys = [key for key, count in zip(keys, counts) if count != 0]
    counts = [count for count in counts if count!= 0]
    return (keys, counts)

data = [([], []), ([], []), ([], [])] #(keys, counts)
for key, val in keys_dict.items():
    if val:
        i = 0
        while i < 3:
            if (MEDS[i] in val) or (MEDS[i].lower() in val):
                keyname = '{0} ({1})'.format(val, key).split()
                data[i][0].append('\n'.join([' '.join(keyname[i:i+3]) for i in range(0, len(keyname), 3)]))
                data[i][1].append(count_keys(key))
            i += 1

for (key, count), med in zip(data, MEDS):
    if not key:
        print('Keys related to {} not found.'.format(med))

data_cleaned = [0, 0, 0]
i = 0
while i < 3:
    data_cleaned[i] = clean_key(data[i][0], data[i][1])
    i += 1
for (key, count), (key_cleaned, count_cleaned), med in zip(data, data_cleaned, MEDS):
    if key and not key_cleaned:
        print('Keys related to {} have count of zero:'.format(med))
        for key in data_cleaned[0][0]:
            print('\t', key)

print('\n')


#plot
def autolabel(rects):
    for rect in rects:
        height = rect.get_width()
        y = rect.get_y()
        ax.annotate('{}'.format(height), xy=(height + 200, y + barwidth/2 + 0.1), ha='center', va='bottom')

barwidth = 0.5
num_keys = len(data_cleaned[0][1]) + len(data_cleaned[1][1]) + len(data_cleaned[2][1])
plt.rcdefaults()
fig, ax = plt.subplots(figsize = (5, num_keys))

labels = data_cleaned[0][0] + data_cleaned[1][0] + data_cleaned[2][0]
y_pos = np.arange(len(labels))

y_count = 0
for (key, count), med in zip(data_cleaned, MEDS):
	if count:
	    rects = ax.barh(y_pos[y_count:y_count + len(count)], count, barwidth, align='center', label=med)
	    autolabel(rects)
	    y_count += len(count)

ax.set_yticks(y_pos)
ax.set_yticklabels(labels)
ax.invert_yaxis()  # labels read top-to-bottom
ax.set_xlabel('Number of treatment units')
ax.set_title('Opioid-related services, {}'.format(YEAR))

plt.xlim(0, 4000)
plt.legend()
plt.savefig('{0}/{0}_stats.png'.format(YEAR), bbox_inches = 'tight', dpi = 300)