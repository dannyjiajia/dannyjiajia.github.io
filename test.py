import os
import re
import shutil
from pathlib import Path

def organize_posts(root_dir):
    # 编译正则表达式用于匹配日期
    date_pattern = re.compile(r'date:\s*(\d{4})-\d{2}-\d{2}')
    
    # 遍历所有md和mdx文件（修改这里的文件匹配模式）
    for ext in ('*.md', '*.mdx'):
        for filepath in Path(root_dir).rglob(ext):
            if not filepath.is_file():
                continue
                
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                # 查找日期
                match = date_pattern.search(content)
                if match:
                    year = match.group(1)
                    
                    # 创建年份文件夹
                    year_dir = os.path.join(root_dir, year)
                    os.makedirs(year_dir, exist_ok=True)
                    
                    # 构建目标路径
                    dest_path = os.path.join(year_dir, filepath.name)
                    
                    # 如果目标文件已存在，添加数字后缀
                    # counter = 1
                    # while os.path.exists(dest_path):
                    #     name, ext = os.path.splitext(filepath.name)
                    #     dest_path = os.path.join(year_dir, f"{name}_{counter}{ext}")
                    #     counter += 1
                    
                    # 移动文件
                    shutil.move(str(filepath), dest_path)
                    print(f"Moved {str(filepath)} to {dest_path}")
                    
            except Exception as e:
                print(f"Error processing {filepath}: {str(e)}")

if __name__ == "__main__":
    # 获取脚本所在目录
    current_dir = os.path.dirname(os.path.abspath(__file__))
    organize_posts(os.path.join(current_dir, 'blog'))
    print("Done!")