const bib = `@book{knuth1984texbook,
title={The TeXbook},
author={Knuth, Donald E.},
volume={1993},
year={1984},
publisher={Addison-Wesley}
}

@article{smith1998neural,
title={Neural networks for pattern recognition},
author={Smith, John and Doe, Jane},
journal={Journal of Artificial Intelligence Research},
volume={10},
number={1},
pages={241--259},
year={1998}
}

@inproceedings{lee2001support,
title={Support vector machines for binary classification},
author={Lee, Yoon and Lee, Chang},
booktitle={Proceedings of the International Conference on Machine Learning},
pages={256--263},
year={2001}
}

@misc{website:latex-tutorial,
author = "Thomas, Adrian",
title = "Introduction to LaTeX Writing",
year = "2020",
howpublished = "\\url{https://docs.keepresearch.com}",
note = "Accessed: 2023-05-10"
}
`;

const latex = `\\documentclass[12pt]{article}
\\usepackage[UTF8]{ctex}

\\usepackage{amsmath, amssymb}
\\usepackage{graphicx}
\\usepackage{listings}
\\usepackage{hyperref}
\\usepackage{caption}
\\usepackage{subcaption}
\\usepackage{array, booktabs}
\\usepackage{multirow, multicol}
\\usepackage[table,xcdraw]{xcolor}
\\usepackage{geometry}
\\geometry{a4paper, margin=1in}
\\usepackage{natbib}

\\title{LaTeX 功能全面介绍}
\\author{mraddict/test}
\\date{\\today}

\\begin{document}
\\maketitle

\\section{介绍}
\\label{sec:mysection}
欢迎使用 keepresearch, $\\sum_{a}^{b}$ LaTeX 是一种基于 \\TeX 的排版系统，广泛用于生成高质量排版的文档，$\\lim_{x \\to 0}$尤其适合处理复杂的数学公式。本文档旨在展示 LaTeX 的各种基本和高级功能。

\\section{文本和字体格式}

\\subsection{字体类型}
\\textbf{加粗}, \\textit{斜体}, \\underline{下划线}, \\texttt{打字机字体}。

\\subsection{字体大小}
{\\tiny 这是非常小的文字} \\\\
{\\scriptsize 这是较小的文字} \\\\
{\\small 这是小文字} \\\\
{\\normalsize 这是正常大小的文字} \\\\
{\\large 这是大文字} \\\\
{\\Large 这是较大的文字} \\\\
{\\LARGE 这是非常大的文字} \\\\
{\\huge 这是巨大的文字} \\\\
{\\Huge 这是极大的文字}


\\section{列表和枚举}

\\subsection{项目符号列表}
\\begin{itemize}
  \\item 第一项
  \\item 第二项
  \\item 第三项
\\end{itemize}

\\subsection{编号列表}
\\begin{enumerate}
  \\item 第一项
  \\item 第二项
  \\item 第三项
\\end{enumerate}

\\subsection{描述列表}
\\begin{description}
  \\item[术语一] 描述一
  \\item[术语二] 描述二
  \\item[术语三] 描述三
\\end{description}


\\section{表格}

\\subsection{简单表格}
\\begin{tabular}{|c|c|c|}
  \\hline
  项目 & 数量 & 价格     \\\\
  \\hline
  苹果 & 10 & \\$1.50 \\\\
  \\hline
  香蕉 & 5  & \\$0.50 \\\\
  \\hline
\\end{tabular}

\\subsection{高级表格}

\\begin{table}[h]
  \\centering
  \\caption{示例表格}
  \\label{tab:summary}

  \\begin{tabular}{|c|c|c|}
      \\hline
      \\textbf{年份} & \\textbf{产品} & \\textbf{销量} \\\\ \\hline
      2021        & A产品         & 100单位       \\\\ \\hline
      2022        & B产品         & 200单位       \\\\ \\hline
      2023        & C产品         & 300单位       \\\\ \\hline
  \\end{tabular}
\\end{table}


\\begin{table}[h]
  \\centering
  \\label{tab:yearly_sales}
  \\begin{tabular}{|c|c|c|}
      \\hline
      \\rowcolor[HTML]{C0C0C0}
      \\textbf{年份}           & \\textbf{产品} & \\textbf{销量} \\\\ \\hline
      \\multirow{2}{*}{2021} & A产品         & 100单位       \\\\ \\cline{2-3}
      & B产品         & 150单位       \\\\ \\hline
      \\multirow{2}{*}{2022} & A产品         & 200单位       \\\\ \\cline{2-3}
      & B产品         & 250单位       \\\\ \\hline
      \\rowcolor[HTML]{FFCCCB}
      2023                  & C产品         & 300单位       \\\\ \\hline
  \\end{tabular}
  \\caption{示例表格}
\\end{table}


\\section{数学公式}

\\subsection{行内公式和块公式}
行内公式示例：\\( E=mc^2 \\)。
\\begin{equation}
  \\int_{a}^{b} x^2 \\, dx = \\frac{b^3 - a^3}{3}
\\end{equation}

\\subsection{多行公式}
\\begin{align}
  a & = b + c \\\\
  e & = f + g
\\end{align}

\\subsection{矩阵和行列式}

\\subsubsection{矩阵}
\\[
  \\begin{matrix}
      a & b \\\\
      c & d
  \\end{matrix}
\\]
\\[
  \\begin{bmatrix}
      a & b \\\\
      c & d \\\\
  \\end{bmatrix}
\\]
\\[
  \\begin{pmatrix}
      a & b \\\\
      c & d \\\\
  \\end{pmatrix}
\\]

\\subsubsection{行列式}

\\[
  \\begin{vmatrix}
      a & b \\\\
      c & d \\\\
  \\end{vmatrix}
\\]


\\section{代码}
\\begin{lstlisting}[language=Python]
# Python 示例代码
def hello_world():
print("Hello, world!")
\\end{lstlisting}


\\section{交叉引用和超链接}

点击跳转到介绍，第~\\ref{sec:mysection}节。


\\section{图像和图表}



\\begin{figure}[!h]
  \\centering
  \\includegraphics[width=0.5\\textwidth]{example.jpg}
  \\caption{示例图像}
\\end{figure}


\\section{参考文献}

这是一个 ai 生成的参考文献的示例。

在数字模式识别领域，神经网络已被广泛地应用于各种复杂任务中，如图像识别和语音处理。如 Smith 和 Doe (1998) 所指出的那样，神经网络提供了一种有效的方式来处理模式识别问题 \\cite{smith1998neural}。此外，支持向量机也显示出在二元分类问题上的强大能力，Lee 和 Chang (2001) 在他们的研究中详细讨论了这一点 \\cite{lee2001support}。

为了深入了解 LaTeX 的使用，可以参考由 Donald E. Knuth 所著的《The TeXbook》，该书详细介绍了 TeX 排版系统的内部工作和使用方法 \\cite{knuth1984texbook}。此外，网络资源也提供了许多有用的 LaTeX 教程和指南，例如 Adrian Thomas 的在线 LaTeX 教程 \\cite{website:latex-tutorial}。

\\bibliographystyle{alpha}
\\bibliography{references}

\\end{document}`;

export const langData = { latex, bib };
export type LangKeys = keyof typeof langData;
