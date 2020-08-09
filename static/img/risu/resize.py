from PIL import Image
from pathlib import Path

new_w = 400

for img_path in Path('.').glob('*.png'):
	new_path = img_path.parent / 'originals' / img_path.name
	img_path.replace(new_path)
	img = Image.open(new_path)
	w, h = img.size
	new_h = int(new_w / w * h)
	resized = img.resize((new_w, new_h), resample=Image.BICUBIC)
	resized.save(img_path, optimize=True)
