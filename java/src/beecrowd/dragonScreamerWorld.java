package beecrowd;

import java.util.Scanner;

public class dragonScreamerWorld {
	public static void main(String[] args) {
		Scanner leitor = new Scanner(System.in);
		while (leitor.hasNext()) {
			int N = leitor.nextInt();
			int min = leitor.nextInt();
			int max = leitor.nextInt();
			int cont = 0;


			for (int i = 0; i < N; i++) {
				int A = leitor.nextInt();
				if (A >= min && A <=max) cont++;
			}
			System.out.println(cont);
		}
	}
}
