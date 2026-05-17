import os

all_images = []
for root, dirs, files in os.walk('.'):
    for file in files:
        if file not in ['cleanup.py', 'deck.md']:
            all_images.append(file)

used_images = []
with open('deck.md', 'r', encoding='utf-8') as deck:
    for line in deck.readlines():
        if line.startswith('![alt text]'):
            curr = line.strip()
            curr = curr.replace('![alt text](', '')
            curr = curr.replace('<', '')
            curr = curr.replace('>', '')
            curr = curr.replace(')', '')
            used_images.append(curr)

removed = 0
for image in all_images:
    if not(image in used_images):
        print(f'Unused {image}')
        os.remove(image)
        removed += 1
print(f'Removed {removed}')
