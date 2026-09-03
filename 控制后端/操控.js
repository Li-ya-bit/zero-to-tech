(function() {
            // 获取DOM元素
            const counterEl = document.getElementById('counter');
            const messageEl = document.getElementById('message');
            const btnInc = document.getElementById('btnInc');
            const btnDec = document.getElementById('btnDec');
            const btnReset = document.getElementById('btnReset');
            const btnColor = document.getElementById('btnColor');
            const body = document.body;

            // 状态变量
            let count = 0;
            let isDarkMode = false;
            let clickCount = 0;
            const messages = [
                '👋 欢迎！点击按钮开始交互',
                '🎯 不错哦，继续吧！',
                '🔥 你玩得很开心嘛！',
                '⚡ 太棒了，停不下来？',
                '🌟 你是个交互高手！',
                '💪 再来再来！',
                '🏆 你已经点了很多次了！',
                '😄 有趣吗？',
                '🚀 继续探索吧！',
                '✨ 太酷了！'
            ];

            // 更新计数显示
            function updateCounter() {
                counterEl.textContent = count;
                // 根据数值改变颜色
                if (count > 0) {
                    counterEl.style.color = '#43e97b';
                } else if (count < 0) {
                    counterEl.style.color = '#f5576c';
                } else {
                    counterEl.style.color = isDarkMode ? '#43e97b' : '#667eea';
                }
            }

            // 显示提示消息
            function showMessage(text, isHighlight = false) {
                messageEl.textContent = text;
                if (isHighlight) {
                    messageEl.classList.add('highlight');
                    setTimeout(() => messageEl.classList.remove('highlight'), 800);
                } else {
                    messageEl.classList.remove('highlight');
                }
            }

            // 根据点击次数获取趣味消息
            function getFunMessage() {
                clickCount++;
                if (clickCount < messages.length) {
                    return messages[clickCount];
                } else {
                    return messages[messages.length - 1] + ' (第' + clickCount + '次)';
                }
            }

            // 增加计数
            btnInc.addEventListener('click', function() {
                count++;
                updateCounter();
                showMessage(getFunMessage() + ' 计数 +1', true);
            });

            // 减少计数
            btnDec.addEventListener('click', function() {
                count--;
                updateCounter();
                showMessage(getFunMessage() + ' 计数 -1', true);
            });

            // 重置计数
            btnReset.addEventListener('click', function() {
                count = 0;
                updateCounter();
                showMessage('🔄 计数已重置为 0', false);
            });

            // 切换颜色主题
            btnColor.addEventListener('click', function() {
                isDarkMode = !isDarkMode;
                if (isDarkMode) {
                    body.classList.add('dark-mode');
                    showMessage('🌙 已切换到深色模式', false);
                    if (count === 0) counterEl.style.color = '#43e97b';
                } else {
                    body.classList.remove('dark-mode');
                    showMessage('☀️ 已切换到浅色模式', false);
                    if (count === 0) counterEl.style.color = '#667eea';
                }
            });

            // 键盘快捷键支持
            document.addEventListener('keydown', function(e) {
                switch (e.key) {
                    case 'ArrowUp':
                    case '+':
                        e.preventDefault();
                        btnInc.click();
                        break;
                    case 'ArrowDown':
                    case '-':
                        e.preventDefault();
                        btnDec.click();
                        break;
                    case '0':
                    case 'r':
                    case 'R':
                        e.preventDefault();
                        btnReset.click();
                        break;
                    case 'c':
                    case 'C':
                        e.preventDefault();
                        btnColor.click();
                        break;
                }
            });

            // 卡片双击重置
            document.getElementById('card').addEventListener('dblclick', function() {
                count = 0;
                updateCounter();
                showMessage('🔄 双击卡片，计数已重置', false);
            });

            // 初始化显示
            updateCounter();
            console.log('✅ 页面已加载，试试点击按钮或使用键盘快捷键：↑/↓ 增减R 重置C 换肤');
        })();