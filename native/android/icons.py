# Android белгішелерін icon-1024.png-ден жасайды
import os, shutil
from PIL import Image
src = Image.open("../../icon-1024.png").convert("RGBA")
bg = Image.new("RGBA", src.size, (255, 255, 255, 255)); bg.alpha_composite(src); src = bg.convert("RGB")
res = "android/app/src/main/res"
for d, n in {"mipmap-mdpi": 48, "mipmap-hdpi": 72, "mipmap-xhdpi": 96, "mipmap-xxhdpi": 144, "mipmap-xxxhdpi": 192}.items():
    p = os.path.join(res, d); os.makedirs(p, exist_ok=True)
    im = src.resize((n, n), Image.LANCZOS)
    for name in ("ic_launcher.png", "ic_launcher_round.png", "ic_launcher_foreground.png"):
        im.save(os.path.join(p, name))
shutil.rmtree(os.path.join(res, "mipmap-anydpi-v26"), ignore_errors=True)
print("icons ok")
