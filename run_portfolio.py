import os
import subprocess
import webbrowser
import time
import socket

def is_port_in_use(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(('localhost', port)) == 0

def run_portfolio():
    print("🚀 Starting Harshit Mishra's Portfolio Automation...")
    
    # 1. Check for node_modules
    if not os.path.exists("node_modules"):
        print("📦 node_modules not found. Installing dependencies...")
        try:
            subprocess.run(["npm", "install"], check=True)
        except subprocess.CalledProcessError:
            print("❌ Failed to install dependencies. Please ensure Node.js and npm are installed.")
            return

    # 2. Determine port
    port = 3000
    if is_port_in_use(port):
        print(f"⚠️ Port {port} is busy, Next.js will likely use another port.")
        # Next.js usually picks the next available one
    
    # 3. Start dev server
    print(f"📡 Starting Next.js Dev Server...")
    process = subprocess.Popen(["npm", "run", "dev"], shell=True)
    
    # 4. Wait for server to be ready and open browser
    print("⏳ Waiting for server to initialize...")
    time.sleep(5)
    
    # We'll try to guess if it's 3000 or 3001
    target_port = 3001 if is_port_in_use(3001) else 3000
    url = f"http://localhost:{target_port}"
    
    print(f"✨ Portfolio ready! Opening {url}")
    webbrowser.open(url)
    
    try:
        process.wait()
    except KeyboardInterrupt:
        print("\n🛑 Stopping portfolio server...")
        process.terminate()

if __name__ == "__main__":
    run_portfolio()
