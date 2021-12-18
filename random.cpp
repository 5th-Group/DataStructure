#include <iostream>

int valueOf(int m, int n)
{
    if (m == n)
    {
        return 0;
    }
    else if (m == 1)
    {
        return n - 1;
    }
    else if (n == 1)
    {
        return m - 1;
    }
    else
    {
        int k = 2;
        int start = 0, end;
        if (m > n)
        {
            while (k < m)
            {
                k * 2;
            }
        }
        else
        {
            while (k < n)
            {
                k * 2;
            }
        }
        end = k;
    }
}

int main(int argc, char const *argv[])
{
    int m, n;
    m = 36, n = 0;
    // std::cout << "Nhập 2 số m và n bất kỳ: " << std::endl;
    // std::cin >> m >> n;
    std::cout << "Giá trị ở cột " << m << " và hàng " << n << " là " << valueOf(m, n);
    return 0;
}
